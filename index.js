
const express = require("express");
const port = 8000;
const app = express();
const cookieParser = require("cookie-parser");
const expressLayouts = require("express-ejs-layouts");

// connection to database(import)
const db = require("./config/mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocal = require('./config/passport-local');


// for taking forms data into body
app.use(express.urlencoded());
app.use(cookieParser());

// use static files
app.use(express.static("./assets"));

// use express ejs layouts
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set("layout extractScripts", true);



// seetting up ejs view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// middle ware to use session cookie
app.use(session({
    name : 'loan-system',
    secret: 'something',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (100 * 60 * 100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

// set base route
app.use("/", require("./routes/index"));

app.listen(port, (err) => {
    if(err){
        console.log("Error while connecting to the server", err);
        return;
    }
    console.log(`server running on port ${port}`);
});