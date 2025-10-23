import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  process.env.MONGODB_URI ||
  "mongodb+srv://karanshah:M9xRIP7Cg2YaUVr3@pitech.m2larp0.mongodb.net/?retryWrites=true&w=majority&appName=pitech";

let cachedClient: MongoClient | null = null;

export async function connectDB() {
  if (cachedClient) return cachedClient;

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect();
  console.log("✅ Connected to MongoDB");
  cachedClient = client;
  return client;
}
