const User = require("../models/userSchema");
const bcrypt = require("bcrypt")

const getSignup = async(req,res)=>{
    try {
        res.render("signup");
    } catch (error) {
        console.log("Error",error);
    }
}

const postSignup = async(req,res)=>{
    const {fullName,email,password} = req.body;
    console.log(req.body);
    
    
    try {
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new User({fullName,email,password:hashedPassword});
        console.log(newUser)
        await newUser.save();
 
        res.render("login")
    } catch (error) {
        console.error("Error",error);
    }
}

module.exports ={
    getSignup,
    postSignup
}