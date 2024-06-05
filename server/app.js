const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB } = require('./db');


dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:3000', // Allow requests from the client
    methods: ['GET', 'POST']
  }
});

//Connects to Mongo DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

//Import Models
const { User } = require('./models/User');
const { Message } = require('./models/Message');
const { ChatRoom } = require('./models/ChatRoom');


let userCounter = 1;
const users = {} //Object to track users in rooms

// Socket.IO connection
io.on('connection', (socket) => {
  const userNumber = userCounter++;
  users[socket.id] = `User ${userNumber}`

  console.log(`User ${userNumber} connected`);

  socket.on('joinRoom', async (room) => {
    socket.join(room);
    io.to(room).emit('roomUsers', Object.values(users));
    console.log(`User joined room: ${room}`);

  // Save user to chat room in database
  let chatRoom = await ChatRoom.findOne({ name: room });
  if (!chatRoom) {
    chatRoom = new ChatRoom({ name: room });
  }
  chatRoom.users.push(socket.id);
  await chatRoom.save();    
  });

  // Listen for chat messages, ans save to the database
  socket.on('chat message', async (msg, room) => {
    const user = users[socket.id];
    const message = new Message({
      user: socket.id, room, message: msg
    });

    //message to be saved in the database
    await message.save();

    io.to(room).emit('chat message', { user, msg });
  });

  // Listen for user disconnection
  socket.on('disconnect', async () => {
    console.log(`User ${userNumber} disconnected`);
    delete users[socket.id];
    for (const room of socket.rooms) {
      io.to(room).emit('roomUsers', Object.values(users));

      //remove user from chat room in database
      let chatRoom = await ChatRoom.findOne({ name: room });
      if (chatRoom) {
        chatRoom.users.pull(socket.id);
        await chatRoom.save();
      }

    
    }
  });
});

// Server start
const PORT = process.env.PORT || 5005;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

