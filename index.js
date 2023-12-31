const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute");
const chatRoute = require("./Routes/chatRoute");
const messageRoute = require("./Routes/messageRoute");
const memeRoute = require("./Routes/memeRoute");
const phraseRoute = require("./Routes/phraseRoute");
const dotenv = require("dotenv");
require("./socket");

const app = express();
require("dotenv").config();
dotenv.config({ path: ".env.local" });

// middleware functions
app.use(express.json()); //json data 주고받기 가능
app.use(cors());

app.use("/api/users", userRoute); //라우터 미들웨어
app.use("/api/chats", chatRoute); //라우터 미들웨어
app.use("/api/messages", messageRoute); //라우터 미들웨어
app.use("/api/memes", memeRoute);
app.use("/phrase", phraseRoute);

app.get("/", (req, res) => {
  res.send("어서오세요 여러분의 서버에~");
});

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res) => {
  console.log(`Server running on port : ${port}`);
});

mongoose
  .connect(uri, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connection established");
  })
  .catch((error) => {
    console.log("MongoDB connection failed : ", error.message);
  });
