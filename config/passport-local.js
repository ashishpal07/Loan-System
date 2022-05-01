
const passport = require('passport');
const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/user");

passport.use(new LocalStrategy({
    usernameField: "email"
}, function(email, password, done){
    // fund the user and stablished the identity
    User.findOne({email: email}, function(err, user){
        if(err){
            console.log("Error while finding user in passport-local");
            return done(err);
        }

        if(!user || user.password != password){
            console.log("Invalid username / password");
            return done(null, false);      // (err, authentication)
        }

        return done(null, user);
    });
}));

// serializing the user to decied which key is put into the cookie
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// deserializing the user from the key in the cookies
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        if(err){
            console.log("error while deserializing user !");
            return done(err);
        }
        return done(null, user);
    });
});

module.exports = passport;