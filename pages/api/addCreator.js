export default function addCreator(req, res) {
  const data = req.body;
  console.log(data);
  return res.json({ message: "Creator Added" });
}
