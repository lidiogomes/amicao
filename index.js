const express = require('express');
require('dotenv/config');

const app = express();
app.use('view engine', 'ejs');


app.listen(process.env.SERVER_PORT, () => {
    console.log(`Listen on port ${process.env.SERVER_PORT}`);
});