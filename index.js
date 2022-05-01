
const express = require("express");
const port = 8000;
const app = express();

// connection to database(import)
const db = require("./config/mongoose");

app.listen(port, (err) => {
    if(err){
        console.log("Error while connecting to the server", err);
        return;
    }
    console.log(`server running on port ${port}`);
});