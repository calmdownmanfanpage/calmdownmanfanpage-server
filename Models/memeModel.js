const mongoose = require("mongoose");

/**
 * TODO: meme 이미지 src를 어디에서 불러올지 결정
 */
const memeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    src: { type: String, required: true },
    link: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Meme", memeSchema);
