
const express = require('express');
const router = express.Router();
const homeController = require("../controllers/home_controller");

router.get("/", homeController.homeRender);
router.get("/login", homeController.renderLogin);
router.get("/register", homeController.renderRegister);
router.use("/register", require("./user"));

module.exports = router;