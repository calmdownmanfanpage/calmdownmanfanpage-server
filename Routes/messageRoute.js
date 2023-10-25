const express = require("express");
const {
  createMessage,
  getMeesage,
} = require("../Controllers/messageController");

const router = express.Router();

router.post("/", createMessage);
router.get("/:chatId", getMeesage);

module.exports = router;
