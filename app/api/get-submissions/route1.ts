import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(req: Request) {
  
const { searchParams } = new URL(req.url);
const fileName = searchParams.get('file') || 'submissions.json';
const dataFilePath = path.join(process.cwd(), 'data', fileName);

  try {
    const fileContents = await fs.readFile(dataFilePath, 'utf-8');
    const data = JSON.parse(fileContents);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Failed to read submissions:', error);
    return new NextResponse('Failed to read submissions file', { status: 500 });
  }
}
