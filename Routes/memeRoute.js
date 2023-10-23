const { Router } = require("express");
const asyncHandler = require("../utils/asyncHandler");
const memeModel = require("../Models/memeModel");

const router = Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const memes = (await memeModel.find({}).lean()).map((e) => ({
      ...e,
      src: `${process.env.BACKEND_URL}/api/memes/images/${e.src}`,
    }));
    res.status(200).json(memes);
  })
);

router.get("/images/:img", (req, res) => {
  res.sendFile(req.params.img, { root: __dirname + "/../public/images/" });
});

module.exports = router;
