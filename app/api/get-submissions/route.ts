import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

const submissionsFilePath = path.join(process.cwd(), 'data', 'submissions.json');
const careerSubmissionsFilePath = path.join(process.cwd(), 'data', 'careerSubmission.json');

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type');

    if (!type || (type !== 'career' && type !== 'contact')) {
      return new NextResponse('Missing or invalid "type" parameter. Must be "career" or "contact".', {
        status: 400,
      });
    }

    console.log('Requested type:', type);

    await client.connect();

    const db = client.db('pitechdb');
    let submissions: any[] = [];

    const collectionName = type === 'career' ? 'careerSubmissions' : 'submissions';
    const collection = db.collection(collectionName);
    submissions = await collection.find({}).toArray();

    if (submissions.length === 0) {
      const filePath = type === 'career' ? careerSubmissionsFilePath : submissionsFilePath;
      try {
        const fileContents = await fs.readFile(filePath, 'utf-8');
        submissions = JSON.parse(fileContents);
      } catch (error) {
        console.warn(`[WARN] No local file found for ${type} submissions.`);
      }
    }

    return NextResponse.json(submissions);
  } catch (error) {
    console.error('[ERROR] Failed to fetch submissions:', error);
    return new NextResponse('Failed to read submissions', { status: 500 });
  } finally {
    await client.close();
  }
}
