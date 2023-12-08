const express = require("express");
const router = express.Router();
const {registerUser} = require("../controllers/UserControllers.js")

router.post("/register",  registerUser);

module.exports = router;