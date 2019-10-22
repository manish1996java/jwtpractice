const express = require("express"); 
const app = express();
const router = require("./routes/user");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const multer= require("multer");




mongoose.connect("mongodb+srv://Manish:taArOUtiVgT4peA6@cluster0-puvlp.mongodb.net/test?retryWrites=true&w=majority",{ useNewUrlParser: true })
.then(()=>{
    console.log("Database Connected");
}).catch((error)=>{
    console.log(error,"connection error")
})


const mimetype = {
    "image/jpeg":"jpeg",
    "image/jpg":"jpg",
    "image/png":"png",
}

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        console.log("inside storage this work");
        cb(null,"upload/")
    },
    filename:(req,file,cb)=>{
        console.log("inside storage this work 2");
        cb(null,new Date + file.originalname)
    },
})

const filefilter = (req,file,cb)=>{
    let isvalid = mimetype[file.mimetype];
    if(isvalid){
        cb(null,true);
    }else{
        cb(new Error("UnExpected Mimetype"),false);
    }
}

const upload = multer({storage: storage,fileFilter:filefilter})

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Origin, Authorization, X-Requested-With, content-type, Accept");
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,DELETE,OPTIONS");
    next(); 
})

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
// 


app.use("/uploadimage",upload.single('mytest'),(req,res,next)=>{
    console.log("this is work");
})

app.use("/user",router);
app.use("",(req,res,next)=>{
    console.log("page not found");
})

module.exports = app;