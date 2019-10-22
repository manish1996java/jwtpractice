const mongoose = require('mongoose');

// const mgdbvalidator = require("mongoose-unique-validator")
const Schema = mongoose.Schema;


const userSchema = new Schema({
    email: {type:String},
    password: {type:String}
})

module.exports = mongoose.model('User',userSchema);