import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import fs from "fs";
import path from "path";

const DB_NAME = "pitechdb";
const COLLECTION = "jobopening";
const DATA_FILE = path.join(process.cwd(), "data", "jobopening.json");

/* -------------------------------------------------------------------------- */
/* 🧩 HELPERS */
/* -------------------------------------------------------------------------- */

// 🧼 Convert UL/LI HTML to clean array
function parseHTMLToArray(input: string): string[] {
  if (!input) return [];
  return input
    .replace(/<\/?ul[^>]*>/gi, "")
    .replace(/<\/li>/gi, "•")
    .replace(/<li>/gi, "")
    .replace(/<[^>]*>/g, "")
    .split("•")
    .map((i) => i.trim())
    .filter(Boolean);
}

// 🧩 Parse HTML to either grouped object or simple array for Key Responsibilities
function parseHTMLToGroupedOrArray(
  input: string,
): Record<string, string[]> | string[] {
  if (!input) return [];

  // Detect if any <b> or bold-like category exists
  const hasCategory = /<b>|<span[^>]*font-weight/i.test(input);

  // ✅ Case 1: Category headers found → grouped object
  if (hasCategory) {
    const grouped: Record<string, string[]> = {};
    let currentCategory = "General";

    // Normalize <span style="font-weight:700"> → <b>
    const normalized = input
      .replace(/<span[^>]*font-weight[^>]*>/gi, "<b>")
      .replace(/<\/span>/gi, "</b>")
      .replace(/<br\s*\/?>/gi, "");

    const parts = normalized.split(/<b>(.*?)<\/b>/gi);

    parts.forEach((part, index) => {
      if (index % 2 === 1) {
        currentCategory = part.trim();
      } else {
        const items = part
          .replace(/<\/?ul[^>]*>/gi, "")
          .replace(/<\/li>/gi, "•")
          .replace(/<li>/gi, "")
          .replace(/<[^>]*>/g, "")
          .split("•")
          .map((i) => i.trim())
          .filter(Boolean);

        if (items.length > 0) {
          if (!grouped[currentCategory]) grouped[currentCategory] = [];
          grouped[currentCategory].push(...items);
        }
      }
    });

    // 🧹 Flatten "General" if only one category & embedded title exists
    const keys = Object.keys(grouped);
    if (keys.length === 1 && keys[0] === "General") {
      const flatItems = grouped["General"];
      const firstLine = flatItems[0] || "";
      const match = firstLine.match(/^([A-Za-z0-9 ()\-:]+?)\s+(.*)$/);
      if (match) {
        const [category, rest] = match;
        grouped[category.trim()] = [rest.trim(), ...flatItems.slice(1)];
        delete grouped["General"];
      }
    }

    return grouped;
  }

  // ✅ Case 2: No category → simple bullet array
  return parseHTMLToArray(input);
}

// 🧾 Convert structured data back into editable HTML
function structuredToHTML(input: any): string {
  if (Array.isArray(input)) {
    return `<ul>${input.map((i) => `<li>${i}</li>`).join("")}</ul>`;
  }
  if (typeof input === "object" && input !== null) {
    return Object.entries(input)
      .map(
        ([key, items]) =>
          `<b>${key}</b><ul>${(items as string[])
            .map((i) => `<li>${i}</li>`)
            .join("")}</ul>`,
      )
      .join("<br/>");
  }
  return "";
}

// 🔄 Sync MongoDB data to local JSON file
function updateLocalJSON(data: any[]) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf8");
    console.log("✅ jobopening.json updated");
  } catch (err) {
    console.error("❌ Failed to update jobopening.json:", err);
  }
}

/* -------------------------------------------------------------------------- */
/* 🟩 GET */
/* -------------------------------------------------------------------------- */
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const title = searchParams.get("title");

    const client = await connectDB();
    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION);

    if (id) {
      const job = await collection.findOne({ _id: new ObjectId(id) });
      if (!job)
        return NextResponse.json({ error: "Job not found" }, { status: 404 });

      const jobWithHTML = {
        ...job,
        qualificationHTML:
          job.qualificationRaw || structuredToHTML(job.qualification),
        keyResponsibilitiesHTML:
          job.keyResponsibilitiesRaw ||
          structuredToHTML(job.keyResponsibilities),
        goodToHaveHTML: job.goodToHaveRaw || structuredToHTML(job.goodToHave),
      };

      return NextResponse.json(jobWithHTML);
    }

    if (title) {
      const decodedTitle = decodeURIComponent(title).trim();

      // Escape special regex characters (like . ? * + ( ) [ ])
      const escapedTitle = decodedTitle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

      const job = await collection.findOne({
        title: { $regex: new RegExp(`^${escapedTitle}$`, "i") },
      });

      if (!job)
        return NextResponse.json({ error: "Job not found" }, { status: 404 });

      return NextResponse.json(job);
    }

    const jobs = await collection.find().sort({ createdAt: -1 }).toArray();
    return NextResponse.json(jobs);
  } catch (err) {
    console.warn("⚠️ MongoDB unreachable, using local fallback.");
    try {
      const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
      return NextResponse.json(data);
    } catch {
      return NextResponse.json([], { status: 200 });
    }
  }
}

/* -------------------------------------------------------------------------- */
/* 🟩 POST */
/* -------------------------------------------------------------------------- */
export async function POST(req: Request) {
  try {
    const {
      title,
      experience,
      status,
      qualification,
      keyResponsibilities,
      goodToHave,
    } = await req.json();

    if (!title || !experience)
      return NextResponse.json(
        { error: "Title and experience are required" },
        { status: 400 },
      );

    const newJob = {
      title,
      experience,
      status: status?.toUpperCase() || "DRAFT",
      qualification: parseHTMLToArray(qualification),
      keyResponsibilities: parseHTMLToGroupedOrArray(keyResponsibilities),
      goodToHave: parseHTMLToArray(goodToHave),
      qualificationRaw: qualification,
      keyResponsibilitiesRaw: keyResponsibilities,
      goodToHaveRaw: goodToHave,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-" + Date.now(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const client = await connectDB();
    const db = client.db(DB_NAME);
    const result = await db.collection(COLLECTION).insertOne(newJob);
    newJob.title = result.insertedId.toString();

    const allJobs = await db.collection(COLLECTION).find().toArray();
    updateLocalJSON(allJobs);

    return NextResponse.json(newJob);
  } catch (err: any) {
    console.error("❌ POST error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

/* -------------------------------------------------------------------------- */
/* 🟩 PUT */
/* -------------------------------------------------------------------------- */
export async function PUT(req: Request) {
  try {
    const {
      id,
      title,
      experience,
      status,
      qualification,
      keyResponsibilities,
      goodToHave,
    } = await req.json();

    if (!id)
      return NextResponse.json({ error: "Missing job ID" }, { status: 400 });

    const update = {
      $set: {
        title,
        experience,
        status: status?.toUpperCase() || "DRAFT",
        qualification: parseHTMLToArray(qualification),
        keyResponsibilities: parseHTMLToGroupedOrArray(keyResponsibilities),
        goodToHave: parseHTMLToArray(goodToHave),
        qualificationRaw: qualification,
        keyResponsibilitiesRaw: keyResponsibilities,
        goodToHaveRaw: goodToHave,
        updatedAt: new Date(),
      },
    };

    const client = await connectDB();
    const db = client.db(DB_NAME);
    await db
      .collection(COLLECTION)
      .updateOne({ _id: new ObjectId(id) }, update);

    const allJobs = await db.collection(COLLECTION).find().toArray();
    updateLocalJSON(allJobs);

    return NextResponse.json({ message: "✅ Job updated successfully" });
  } catch (err: any) {
    console.error("❌ PUT error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

/* -------------------------------------------------------------------------- */
/* 🟩 DELETE */
/* -------------------------------------------------------------------------- */
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id)
      return NextResponse.json({ error: "Missing job ID" }, { status: 400 });

    const client = await connectDB();
    const db = client.db(DB_NAME);
    await db.collection(COLLECTION).deleteOne({ _id: new ObjectId(id) });

    const allJobs = await db.collection(COLLECTION).find().toArray();
    updateLocalJSON(allJobs);

    return NextResponse.json({ message: "✅ Job deleted successfully" });
  } catch (err: any) {
    console.error("❌ DELETE error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
