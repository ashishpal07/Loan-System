
const User = require("../models/user");
const mongoose = require("mongoose");

module.exports.createUser = async (req, res) => {
    let {name, email, password} = req.body;
    if(!name || !email || !password){
        console.log("All fields are required");
        return res.redirect('/register');
    }

    // create user
    let user = await User.create(req.body);
    if(!user){
        console.log("Error while creating user !");
        return res.redirect('/register');
    }
    console.log("User is created !", user);
    return res.redirect('/register');
}