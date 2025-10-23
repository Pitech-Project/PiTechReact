import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import nodemailer from "nodemailer";

// 🔹 MongoDB connection
const uri =
  "mongodb+srv://karanshah:M9xRIP7Cg2YaUVr3@pitech.m2larp0.mongodb.net/?retryWrites=true&w=majority&appName=pitech";
const client = new MongoClient(uri);

// 🔹 Local file paths (for dev mode)
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

// 🔹 Type definition
interface FormData {
  name: string;
  lastname: string;
  email: string;
  contactnumber: string;
  message: string;
  appliedFor?: string;
  appliedon?: string;
  resume?: string;
  fullname?: string;
}

// 📨 Main POST handler
export async function POST(req: Request) {
  try {
    const { data, type }: { data: FormData; type: string } = await req.json();

    // Combine name and lastname
    const fullName = `${data.name} ${data.lastname || ""}`.trim();
    data.fullname = fullName;

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

    // ✅ Save locally in development
    if (process.env.NODE_ENV === "development") {
      let existing: FormData[] = [];

      try {
        const fileContents = await fs.readFile(filePath, "utf-8");
        existing = JSON.parse(fileContents);
      } catch {
        console.warn(
          `[WARN] No local file found for ${type} submissions. Creating new.`,
        );
      }

      existing.push(data);
      await fs.mkdir(path.dirname(filePath), { recursive: true });
      await fs.writeFile(filePath, JSON.stringify(existing, null, 2));
    }

    // ✅ Send emails
    await sendEmails(data, type);

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

// 📧 Email Sending Logic
async function sendEmails(data: FormData, type: string) {
  // ⚙️ SMTP Configuration
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "karan.shah@pitechniques.com",
      pass: "gbjarcbdtbzebtkk", // Gmail App Password
    },
  });

  const adminEmail = "karan.shah@pitechniques.com";
  const fullName =
    data.fullname || `${data.name} ${data.lastname || ""}`.trim();

  // 🧩 Resume Attachment (Career Only)
  let attachments: any[] = [];

  if (type === "career" && data.resume) {
    try {
      const filePath = data.resume.startsWith("http")
        ? data.resume
        : path.join(process.cwd(), "public", data.resume);

      if (!data.resume.startsWith("http")) {
        await fs.access(filePath);
      }

      attachments.push({
        filename: path.basename(filePath),
        path: filePath,
      });
    } catch {
      console.warn("⚠️ Resume not found or inaccessible. Skipping attachment.");
      attachments = [];
    }
  }

  // 🧩 Optional Career Fields
  const careerFields =
    type === "career"
      ? `
        <p><strong>Applied For:</strong> ${data.appliedFor || "N/A"}</p>
        <p><strong>Applied On:</strong> ${data.appliedon || new Date().toLocaleDateString()}</p>
      `
      : "";

  // 📩 Admin Notification Email
  const adminMail = {
    from: `"Pi Techniques" <karan.shah@pitechniques.com>`,
    to: adminEmail,
    subject: `New ${type === "career" ? "Career" : "Contact"} Inquiry: ${fullName}`,
    html: `
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.contactnumber}</p>
      <p><strong>Message:</strong> ${data.message}</p>
      ${careerFields}
      ${data.resume ? `<p><strong>Resume:</strong> ${path.basename(data.resume)}</p>` : ""}
    `,
    attachments,
  };

  // 🧩 Separate Acknowledgement Messages
  let userSubject = "";
  let userHtml = "";

  if (type === "career") {
    userSubject = `Job Application Submission ${data.appliedFor}, ${fullName}`;
    userHtml = `
      <p>Hi ${fullName},</p>
      <p>
        Thank you for applying for the position of <strong>${data.appliedFor || "a role"}</strong> at Pi Techniques.
       We have received your application.
      </p>
      <p>
        We will review your application and contact you shortly.
      </p>
      <br/>
      <p>Best regards,<br/>Pitech Recruitment Team</p>
    `;
  } else {
    userSubject = "Thank You for Contacting Us";
    userHtml = `
      <p>Hi ${fullName},</p>
      <p>
       Thank you for reaching out to us! We’ve received your message and will get back to you as soon as possible.
      </p>
      <br/>
      <p>Best regards,<br/>PiTech Team</p>
    `;
  }

  // 📩 User Acknowledgement Email
  const userMail = {
    from: `"Pi Techniques" <karan.shah@pitechniques.com>`,
    to: data.email,
    subject: userSubject,
    html: userHtml,
  };

  try {
    await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);
    console.log("✅ Emails sent successfully");
  } catch (error) {
    console.error("❌ Error sending emails:", error);
  }
}
