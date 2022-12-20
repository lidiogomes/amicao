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

//MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routers
app.use('/', require('./routes/login'));

const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => {
    console.log(`Server listen on port ${port}`);
});