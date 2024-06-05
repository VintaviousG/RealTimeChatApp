const mongoose = require('mongoose');
const dotenv = require('dotenv');
// Load environment variables from .env file, now i can use them
dotenv.config();

// Connect to MongoDB
//MongoDB connection, I will use the MongoDB Atlas service
//The name of the database will be chat_app, and collection will be made eith er before adding the models or later
const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'chat_app'
      });
      console.log('MongoDB connected');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      process.exit(1);
    }
  };

  exports.connectDB = connectDB;
