const express = require("express");
const router = express.Router();
const {getData, updateData} = require("../Controllers/phraseController");

router.get("/", getData);
router.put("/update", updateData);

module.exports = router;
