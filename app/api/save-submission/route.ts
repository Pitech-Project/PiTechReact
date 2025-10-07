import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import nodemailer from "nodemailer";

// 🔹 MongoDB connection
const uri =
  "mongodb+srv://karanshah:M9xRIP7Cg2YaUVr3@pitech.m2larp0.mongodb.net/?retryWrites=true&w=majority&appName=pitech";
const client = new MongoClient(uri);

// 🔹 Local file paths (for development storage)
const submissionsFilePath = path.join(process.cwd(), "data", "submissions.json");
const careerSubmissionsFilePath = path.join(process.cwd(), "data", "careerSubmission.json");

// 🔹 Type definition
interface FormData {
  name: string;
  lastname: string;
  email: string;
  contactnumber: string;
  message: string;
  appliedFor?: string;
  appliedon?: string;
  resume?: string; // Path, base64, or URL
}

// 📨 Main POST handler
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

    // ✅ Save to MongoDB
    await collection.insertOne(data);

    // ✅ Write locally only in development
    if (process.env.NODE_ENV === "development") {
      let existing: FormData[] = [];

      try {
        const fileContents = await fs.readFile(filePath, "utf-8");
        existing = JSON.parse(fileContents);
      } catch {
        console.warn(`[WARN] No local file found for ${type} submissions. Creating new.`);
      }

      existing.push(data);
      await fs.mkdir(path.dirname(filePath), { recursive: true });
      await fs.writeFile(filePath, JSON.stringify(existing, null, 2));
    }

    // ✅ Send confirmation and admin emails
    await sendEmails(data, type);

    return new NextResponse(JSON.stringify({ message: "Saved successfully" }), { status: 200 });
  } catch (error) {
    console.error("[ERROR] Failed to save submission:", error);
    return new NextResponse(JSON.stringify({ error: "Save failed" }), { status: 500 });
  } finally {
    await client.close();
  }
}

// 📧 Email Sending Logic
async function sendEmails(data: FormData, type: string) {
  // ⚙️ SMTP Configuration (Hardcoded for now)
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "karan.shah@pitechniques.com", // 🔹 Gmail
      pass: "gbjarcbdtbzebtkk", // 🔹 App password
    },
  });

  const adminEmail = "karan.shah@pitechniques.com"; // 🔹 Admin recipient

  // 📎 Attach resume if it exists and type is 'career'
  const attachments =
    type === "career" && data.resume
      ? [
          {
            filename: path.basename(data.resume),
            path: data.resume.startsWith("http")
              ? data.resume // If hosted online (URL)
              : path.join(process.cwd(), "public", data.resume), // If local file path
          },
        ]
      : [];

  // ✅ Include "Applied For" & "Applied On" only for career submissions
  const careerFields =
    type === "career"
      ? `
        <p><strong>Applied For:</strong> ${data.appliedFor}</p>
        <p><strong>Applied On:</strong> ${data.appliedon}</p>
      `
      : "";

  // 📩 Admin Notification Email
  const adminMail = {
    from: `"Pi Techniques" <karan.shah@pitechniques.com>`,
    to: adminEmail,
    subject: `📥 New ${type === "career" ? "Career" : "Contact"} Submission`,
    html: `
      <h3>New ${type} submission received</h3>
      <p><strong>Name:</strong> ${data.name} ${data.lastname}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.contactnumber}</p>
      <p><strong>Message:</strong> ${data.message}</p>
      ${careerFields}
      ${
        data.resume
          ? `<p><strong>Resume Attached:</strong> ${path.basename(data.resume)}</p>`
          : ""
      }
    `,
    attachments,
  };

  // 📩 User Acknowledgement Email
  const userMail = {
    from: `"Pi Techniques" <karan.shah@pitechniques.com>`,
    to: data.email,
    subject: "Thank You for Contacting Us",
    html: `
      <p>Hi ${data.name},</p>
      <p>
        Thank you for reaching out to us! We’ve received your ${
          type === "career" ? "career application" : "message"
        } and will get back to you as soon as possible.
      </p>
      <br/>
      <p>Best regards,<br/>PiTech Team</p>
    `,
  };

  try {
    await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);
    console.log("✅ Emails sent successfully");
  } catch (error) {
    console.error("❌ Error sending emails:", error);
  }
}
