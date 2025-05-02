import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://ii08:tt1998118@cluster0.wxxirlp.mongodb.net/?retryWrites=true&w=majority&appName=ii08";
const dbName = "Web";

let client;
let clientPromise;

if (!global.mongo) {
  client = new MongoClient(uri);
  global.mongo = client.connect();
}
clientPromise = global.mongo;

export async function connectToDatabase() {
  const client = await clientPromise;
  const db = client.db(dbName);
  return { client, db };
}
