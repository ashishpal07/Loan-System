
const express = require("express");
const port = 8000;
const app = express();

// connection to database(import)
const db = require("./config/mongoose");

// seetting up ejs view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// set rbase route
app.use("/", require("./routes/index"));

app.listen(port, (err) => {
    if(err){
        console.log("Error while connecting to the server", err);
        return;
    }
    console.log(`server running on port ${port}`);
});