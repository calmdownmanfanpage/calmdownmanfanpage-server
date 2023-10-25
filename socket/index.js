const { Server } = require("socket.io");

const io = new Server({ cors: "http://localhost:5173" });

let onlineUsers = [];
io.on("connection", (socket) => {
  console.log("a user connected: ", socket.id);

  //listen to a connection
  socket.on("addNewUser", (userId) => {
    //이미 소켓아이디가 추가된 유저라면 X
    !onlineUsers.some((user) => user.userId === userId) &&
      onlineUsers.push({ userId, socketId: socket.id });

    console.log("onlineUsers : ", onlineUsers);

    io.emit("getOnlineUsers", onlineUsers);
  });

  //add message
  //receive from client
  socket.on("sendMessage", (message) => {
    //온라인한 유저 중 채팅 상대방 유저 찾기
    const user = onlineUsers.find(
      (user) => user.userId === message.recipientId
    );

    //상대방 유저 소켓에 getMessage 이벤트 전달
    if (user) {
      //private socket
      io.to(user.socketId).emit("getMessage", message);
      io.to(user.socketId).emit("getNotification", {
        senderId: message.senderId, //메시지 보내는 사람
        isRead: false,
        date: new Date(),
      }); //상대방 유저가 메시지 전달 받을 때 알람 가져오기
    }
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
    onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id);
    io.emit("getOnlineUsers", onlineUsers);
  });
});

io.listen(4000, () => {
  console.log("server running at http://localhost:3000");
});
