import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const uri = "mongodb+srv://karanshah:M9xRIP7Cg2YaUVr3@pitech.m2larp0.mongodb.net/?retryWrites=true&w=majority&appName=pitech";
const client = new MongoClient(uri);

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();
    console.log("Received username:", username);

    await client.connect();
    const db = client.db("pitechdb");
    const collection = db.collection("authLogin");

    const user = await collection.findOne({ username });

    if (user && user.password === password) {
      const res = NextResponse.json({ message: "Logged in" });

      res.cookies.set("session", "LoggedIn", {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60, // 1 hour
      });

      return res;
    }
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 },
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  } finally {
    await client.close(); // Clean up the connection
  }
}
