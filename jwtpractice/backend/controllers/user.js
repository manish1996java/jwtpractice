const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



exports.login = (req, res, next) => {
    
    let fetchuser;
    User.findOne({ email: req.body.email }).then((user) => {
        if (!user) {
            res.status(401).json({
                message: "authentication fail"
            })
        }
        fetchuser = user;
        console.log(user.password)

        console.log(bcrypt.compare(req.body.password, user.password));
        return bcrypt.compare(req.body.password, fetchuser.password);

    }).then((result) => {
        if (!result) {
            res.status(401).json({
                message: "auth fail"
            })
        }
        const token = jwt.sign(
            { email: fetchuser.email, password: fetchuser.password }, 
            "my_password_is_so_strong", 
            { expiresIn: "1h" });

        res.status(200).json({
            webtoken:token
        })
        // console.log(token);
        // const decodedvalue = jwt.decode(token,{complete:true});
        // console.log(decodedvalue.payload);
        // console.log(decodedvalue.header);
    }).catch((error) => {
        console.log(error);
    })
}
exports.signup = (req, res, next) => {

    bcrypt.hash(req.body.password, 10).then((hash) => {
        const user = new User({
            email: req.body.email,
            password: hash
        })
        user.save().then((val) => {
            console.log(val);
        });
    })

}