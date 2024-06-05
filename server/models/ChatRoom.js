//ChatRoom model will store information about chat rooms and thier participants
const mongoose = require('mongoose');

const ChatRoomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});



const ChatRoom = mongoose.model('ChatRoom', ChatRoomSchema);
module.exports = ChatRooml;
