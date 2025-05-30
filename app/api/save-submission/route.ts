import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import nodemailer from "nodemailer";

const uri = "mongodb+srv://karanshah:M9xRIP7Cg2YaUVr3@pitech.m2larp0.mongodb.net/?retryWrites=true&w=majority&appName=pitech";
const client = new MongoClient(uri);

const submissionsFilePath = path.join(process.cwd(), "data", "submissions.json");
const careerSubmissionsFilePath = path.join(process.cwd(), "data", "careerSubmission.json");

interface FormData {
  name: string;
  lastname: string;
  email: string;
  contactnumber: string;
  message: string;
  appliedFor?: string;
  appliedon?: string;
  resume?: string; // e.g., "uploads/resume123.pdf"
}

export async function POST(req: Request) {
  try {
    const { data, type }: { data: FormData; type: string } = await req.json();

    await client.connect();
    const db = client.db("pitechdb");

    let collection;
    let filePath;
    let recipientEmail = "karan.shah@pitechniques.com";

    if (type === "career") {
      collection = db.collection("careerSubmissions");
      filePath = careerSubmissionsFilePath;
    } else {
      collection = db.collection("submissions");
      filePath = submissionsFilePath;
    }

    // Insert into MongoDB
    await collection.insertOne(data);

    // Save to local file
    let existing: FormData[] = [];
    try {
      const fileContents = await fs.readFile(filePath, "utf-8");
      existing = JSON.parse(fileContents);
    } catch {
      console.warn(`[WARN] No local file found for ${type} submissions.`);
    }

    existing.push(data);
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, JSON.stringify(existing, null, 2));

    // Prepare email
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "karan.shah@pitechniques.com",
        pass: "gbjarcbdtbzebtkk", // Use env vars in production
      },
    });

    const attachments = [];

    if (type === "career" && data.resume) {
      const resumePath = path.join(process.cwd(), "public", "uploads", path.basename(data.resume));
      try {
        await fs.access(resumePath); // Check file exists
        attachments.push({
          filename: path.basename(resumePath),
          path: resumePath,
          contentType: "application/pdf",
        });
        console.log("[INFO] Resume attached:", resumePath);
      } catch (err) {
        console.warn("[WARN] Resume file not found at", resumePath, err);
      }
    }

    const mailHtml = `
      <h3>${type === "career" ? "Career Submission Details" : "Contact Submission Details"}</h3>
      <p><strong>Name:</strong> ${data.name} ${data.lastname}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Contact Number:</strong> ${data.contactnumber}</p>
      <p><strong>Message:</strong> ${data.message}</p>
      ${type === "career" ? `<p><strong>Applied For:</strong> ${data.appliedFor}</p>` : ""}
      ${type === "career" ? `<p><strong>Applied On:</strong> ${data.appliedon}</p>` : ""}
    `;

    const mailOptions = {
      from: '"Pitechniques" <karan.shah@pitechniques.com>',
      to: recipientEmail,
      subject: type === "career" ? "New Career Form Submission" : "New Contact Form Submission",
      html: mailHtml,
      attachments,
    };

    await transporter.sendMail(mailOptions);
    console.log("[INFO] Email sent successfully.");

    return new NextResponse(JSON.stringify({ message: "Saved and emailed successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("[ERROR] Failed to save or send email:", error);
    return new NextResponse(JSON.stringify({ error: "Save or email failed" }), {
      status: 500,
    });
  } finally {
    await client.close();
  }
}
