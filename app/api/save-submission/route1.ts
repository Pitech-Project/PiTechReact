import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

const uri = 'mongodb://localhost:27017'; // Your MongoDB URI
const client = new MongoClient(uri);

const submissionsFilePath = path.join(process.cwd(), 'data', 'submissions.json');
const careerSubmissionsFilePath = path.join(process.cwd(), 'data', 'careerSubmission.json');
const uploadDir = path.join(process.cwd(), 'public', 'uploads');


interface FormData {
    name: string;
    lastname: string;
    email: string;
    contactnumber: string;
    message: string;
    appliedFor: string;
    appliedon: string;
    resume: string | null;
}

export async function POST(req: Request) {
    try {
        const formData = await req.formData();

        const data = {
            name: formData.get('name')?.toString() || '',
            lastname: formData.get('lastname')?.toString() || '',
            email: formData.get('email')?.toString() || '',
            contactnumber: formData.get('contactnumber')?.toString() || '',
            message: formData.get('message')?.toString() || '',
            appliedFor: formData.get('appliedFor')?.toString() || '',
            appliedon: formData.get('appliedon')?.toString() || '',
            resume: null as string | null, // store filename or path here
        };

        const file = formData.get('resume') as File | null;
        const type = formData.get('type') as string;
        // const { data, type }: { data: FormData; type: string } = await req.json(); // Type the request data
        console.log(data)
        debugger
        if (file && file.name) {
          const bytes = await file.arrayBuffer();
          const buffer = new Uint8Array(bytes);
          const fileName = `${Date.now()}-${file.name}`;
          const filePath = path.join(uploadDir, fileName);

          await fs.mkdir(uploadDir, { recursive: true });
          await fs.writeFile(filePath, buffer);

          data.resume = `/uploads/${fileName}`; // public path
        }

        await client.connect();
        const db = client.db('pitechdb');
        
        // let collection;
        // let filePath;

        // if (type === 'career') {
        //     collection = db.collection('careerSubmissions');
        //     filePath = careerSubmissionsFilePath;
        // } else {
        //     collection = db.collection('submissions');
        //     filePath = submissionsFilePath;
        // }

        const isCareer = data.appliedFor.toLowerCase().includes("career") || data.resume !== null;
        const collection = db.collection(isCareer ? 'careerSubmissions' : 'submissions');
        const filePath = isCareer ? careerSubmissionsFilePath : submissionsFilePath;

        // Insert into MongoDB
        await collection.insertOne(data);

        // Read from file (if exists)
        let existing = []; // Type the existing data
        try {
            const fileContents = await fs.readFile(filePath, 'utf-8');
            existing = JSON.parse(fileContents);
        } catch (err) {
            console.warn(`[WARN] No local file found for ${type} submissions. Creating a new one.`);
        }

        // Add new entry and save
        existing.push(data);
        await fs.mkdir(path.dirname(filePath), { recursive: true });
        await fs.writeFile(filePath, JSON.stringify(existing, null, 2));

        return new NextResponse(JSON.stringify({ message: 'Saved successfully' }), { status: 200 });
    } catch (error) {
        console.error('[ERROR] Failed to save submission:', error);
        return new NextResponse(JSON.stringify({ error: 'Save failed' }), { status: 500 });
    } finally {
        await client.close();
    }
}
