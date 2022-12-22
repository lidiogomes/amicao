const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const connect = require('./databaseConnection');

//Conifig do dotenv
dotenv.config();
//Conecta com o baco de dados
connect();

const app = express();
app.set('view engine', 'ejs');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

//Routers
app.use('/', require('./routes/login'));

const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`);
});