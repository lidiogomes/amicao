const express = require("express");
const app = express();

const serverPort = 8080;


app.listen(serverPort, () => {
    console.log(`Listen on port ${serverPort}`);
});