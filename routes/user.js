
const express = require('express');
const router = express.Router();
const passport = require('passport');
const usersController = require("../controllers/users_controller");

router.get("/loan-form", passport.checkAuthentication, usersController.renderLoan);

module.exports = router;