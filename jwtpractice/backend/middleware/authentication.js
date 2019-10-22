const jwt = require("jsonwebtoken");

module.exports = (req,res,next)=>{
    try{
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token,"my_password_is_so_strong");
    next();
    }catch(error){
        res.status(401).json({
            error:"authentication error !"
        })
    }
}