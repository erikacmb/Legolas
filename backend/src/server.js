require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const routes = require('./routes');
const middlewares = require('./middlewares');
const server = express();

// db
mongoose.connect(process.env.ATLAS_URI, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(console.log('Legolas backend is connected to MongoDB 🧝🏻'));
  
mongoose.connection.on('connected', () => {
    console.log('Mongoose default connection is open 🌿');
});

mongoose.connection.on('error', err => {
    console.log(`Mongoose error message: ${err} 🔴`);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected 🍃');
});

// server
const port = process.env.PORT;
server.use(middlewares.requestTime);
server.use(express.json());
server.use(routes);
server.listen(port, () => {
  console.log(`Server is listening on port: ${port} 😍`);
});