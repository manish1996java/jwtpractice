const express = require("express");
const autmiddle = require("../middleware/authentication");
const router = express.Router();
const userrout = require("../controllers/user");


router.post("/login",userrout.login)
router.post("/signup",userrout.signup)
router.post("/check",autmiddle,(req,res,next)=>{
    res.status(200).json({
        message:"its working"
    });
})

module.exports = router;