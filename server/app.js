const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:3000', // Allow requests from the client
    methods: ['GET', 'POST']
  }
});

// Middleware
app.use(cors());
app.use(express.json());

//MongoDB connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

let userCounter = 1;
const users = {} //Object to track users in rooms

// Socket.IO connection
io.on('connection', (socket) => {
  const userNumber = userCounter++;
  users[socket.id] = `User ${userNumber}`

  console.log(`User ${userNumber} connected`);

  socket.on('joinRoom', (room) => {
    socket.join(room);
    io.to(room).emit('roomUsers', Object.values(users));
    console.log(`User joined room: ${room}`);
  });

  socket.on('chat message', (msg, room) => {
    io.to(room).emit('chat message', msg);
  });

  // Listen for user disconnection
  socket.on('disconnect', () => {
    console.log(`User ${userNumber} disconnected`);
    delete users[socket.id];
    for (const room of socket.rooms) {
      io.to(room).emit('roomUsers', Object.values(users));
    
    }
  });
});

// Server start
const PORT = process.env.PORT || 5005;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

