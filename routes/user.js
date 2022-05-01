
const express = require('express');
const router = express.Router();
const usersController = require("../controllers/users");

router.post("/user", usersController.createUser);

module.exports = router;