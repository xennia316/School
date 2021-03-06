const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema ({
    name: String,
    message: String,
}, 
{
    timestamps: true
})

module.exports = mongoose.model('message', MessageSchema);