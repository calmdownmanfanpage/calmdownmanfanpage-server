const express = require("express");
const {getPage, postLikes} = require("../Controllers/phraseController");

const router = express.Router();

router.get("/", getPage);
router.post("/likes", postLikes)

module.exports = router;
