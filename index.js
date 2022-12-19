const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.set('view engine', 'ejs');

//Routers
app.use('/', require('./routes/login'));

const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => {
    console.log(`Server listen on port ${port}`);
});