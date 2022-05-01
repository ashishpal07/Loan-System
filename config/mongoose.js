const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/jiraf");

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connecting to db'));

db.once('open', () => {
    console.log("successfully connected to mongodb database");
});

module.exports = db;