// const express = require("express");  //old
import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import { Server } from 'socket.io';

import Connection from "./database/db.js";
import Route from "./routes/route.js";
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const PORT = 8080;

app.use(cors()); //allows transfer data from localhost 5173 to 8080 as our browser don't support it.
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/',Route);

Connection();             

const expressServer = app.listen(PORT,() => {
    console.log(`Server is running successfully on PORT ${PORT}`);
});


const io = new Server(expressServer, {
    cors: {
        origin: process.env.CLIENT_URL,  // frontend url
    },
});


let users = [];

const addUsers = (userData,socketId) => {
    !users.some(user => user.sub === userData.sub) && users.push({...userData,socketId});
};

const getUser = (userId) => {
    return users.find(user => user.sub === userId);
} 



io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('addUsers',userData => {
        addUsers(userData,socket.id);
        io.emit('getUsers',users);
    })

    socket.on('sendMessage', data => {
        const user = getUser(data.receiverId);
        if (user) {
            io.to(user.socketId).emit('getMessage', data);
        } else {
            console.log(`User with ID ${data.receiverId} not found`);
        }
    });
});