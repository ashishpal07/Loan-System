
const express = require('express');
const passport = require('passport');
const router = express.Router();
const homeController = require("../controllers/home_controller");
const usersController = require("../controllers/users_controller");

router.get("/", homeController.homeRender);
router.get("/login", homeController.renderLogin);
router.get("/register", homeController.renderRegister);
router.post("/register/user", usersController.createUser);

router.get("/logout", usersController.logOut);

router.post("/login/user", passport.authenticate(
    'local',
    {failureRedirect: "/login"}
), usersController.logIn);

router.use("/user", require("./user"));

module.exports = router;