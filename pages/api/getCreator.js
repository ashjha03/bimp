import { MongoClient } from "mongodb";

export default async function getCreator(req, res) {
  const client = new MongoClient(process.env.MONGO_URI);

  await client.connect().then(console.log("MongoDB Connected"));
  const db = client.db();
  const { username } = req.query;

  try {
    const creator = await db
      .collection("collabstr")
      .findOne({ username: username });
    return res.json({ message: "Creator Found", success: true, user: creator });
  } catch (err) {
    console.log("error: ******", err);
  }
}
