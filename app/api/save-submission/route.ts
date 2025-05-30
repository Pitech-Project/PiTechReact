import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const uri = "mongodb+srv://karanshah:M9xRIP7Cg2YaUVr3@pitech.m2larp0.mongodb.net/?retryWrites=true&w=majority&appName=pitech";

const client = new MongoClient(uri);

const submissionsFilePath = path.join(
  process.cwd(),
  "data",
  "submissions.json",
);
const careerSubmissionsFilePath = path.join(
  process.cwd(),
  "data",
  "careerSubmission.json",
);

interface FormData {
  name: string;
  lastname: string;
  email: string;
  contactnumber: string;
  message: string;
  appliedFor: string;
  appliedon: string;
  resume?: string;
}

export async function POST(req: Request) {
  try {
    const { data, type }: { data: FormData; type: string } = await req.json(); 

    await client.connect();
    const db = client.db("pitechdb");

    let collection;
    let filePath;

    if (type === "career") {
      collection = db.collection("careerSubmissions");
      filePath = careerSubmissionsFilePath;
    } else {
      collection = db.collection("submissions");
      filePath = submissionsFilePath;
    }

    
    await collection.insertOne(data);

    let existing: FormData[] = []; 
    try {
      const fileContents = await fs.readFile(filePath, "utf-8");
      existing = JSON.parse(fileContents);
    } catch (err) {
      console.warn(
        `[WARN] No local file found for ${type} submissions. Creating a new one.`,
      );
    }


    existing.push(data);
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, JSON.stringify(existing, null, 2));

    return new NextResponse(JSON.stringify({ message: "Saved successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("[ERROR] Failed to save submission:", error);
    return new NextResponse(JSON.stringify({ error: "Save failed" }), {
      status: 500,
    });
  } finally {
    await client.close();
  }
}
