const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

const MessageModel = require('./Models/message');

const connection = mongoose.connect("mongodb+srv://Sonia:ZENNIA0709@cluster0.hcmtn.mongodb.net/LanProject?retryWrites=true&w=majority");

connection.catch(() => console.log('Connection unsuccessful'));
connection.then(() => console.log('Connection successful'))


app.use(express.json());
app.use(express.urlencoded());

app.post('/', async (req, res) => {
    const { name, message } = req.body;
    const newMessage = await new MessageModel({name: name, message: message});
    newMessage.save();
    res.json({message: 'message sent', data: newMessage});
});

app.get('/', async (req, res) => {
    const messages = await MessageModel.find({});
    res.json(messages);
});

app.use(cors());

const PORT = 5000;

app.listen(PORT, console.log(`Running on port ${PORT}`));