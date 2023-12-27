import connectDB from "../../middleware/mongodb";
import Creator from "@/models/Creator";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);
    if (data) {
      try {
        const creator = new Creator(data);
        var usercreated = await creator.save();
        return res.status(200).send(usercreated);
      } catch (error) {
        return res.status(500).send(error.message);
      }
    } else {
      res.status(422).send("data_incomplete");
    }
  } else {
    res.status(422).send("req_method_not_supported");
  }
};

export default connectDB(handler);
