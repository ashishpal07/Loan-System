
module.exports.homeRender = (req, res) => {
    return res.render('home', {
        title: "home"
    });
}

module.exports.renderLogin = (req, res) => {
    return res.render('login', {
        title: "Login"
    });
}

module.exports.renderRegister = (req, res) => {
    return res.render('register', {
        title: "register"
    });
}