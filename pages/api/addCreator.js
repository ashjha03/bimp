import Creator from "@/models/Creator";
import { MongoClient } from "mongodb";

export default async function addCreator(req, res) {
  const client = new MongoClient(process.env.MONGO_URI);
  await client.connect().then(console.log("MongoDB Connected"));
  const db = client.db();
  const data = JSON.parse(req.body);
  let newcreator = new Creator(data);
  const result = await db.collection("collabstr").insertOne(newcreator);
  console.log(result);

  return res.json({ message: "Creator Added", success: true });
}
