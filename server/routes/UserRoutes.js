const express = require("express")

const router =  express.Router();
const enrollUser = require("../controllers/UserControllers") 

router.post('/register',  enrollUser);

module.exports = router;