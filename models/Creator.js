const mongoose = require("mongoose");
const CreatorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    instagramFollowers: { type: Number, default: "0" },
    youtubeSubscribers: { type: Number, default: "0" },
    username: { type: String, required: true, unique: true },
    address: { type: String, default: "" },
    tagline: { type: String, default: "" },
    reelPrice: { type: Number, default: "" },
    profileImg: { type: String, default: "" },
    coverImg: { type: String, default: "" },
    addImg1: { type: String, default: "" },
    addImg2: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.models.Creator ||
  mongoose.model("Creator", CreatorSchema);
