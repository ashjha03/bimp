import connectDB from "@/middleware/mongodb";
import Creator from "@/models/Creator";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const result = await Creator.find({});
    return res.status(200).send({ message: "User Found", data: result });
  } else {
    res.status(422).send("post_method_not_supported");
  }
};

export default connectDB(handler);
