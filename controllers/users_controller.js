
const User = require("../models/user");

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

module.exports.logIn = (req, res) => {
    if(req.isAuthenticated()){
        return res.redirect("/user/loan-form");
    }
    console.log("user is not authenticated !");
    return res.render('login', {
        title: "Login"
    });
}

module.exports.renderLoan = (req, res) => {
    return res.render("loan", {
        title: "loan"
    });
}

module.exports.logOut = (req, res) => {
    req.logout();
    return res.redirect("/");
}