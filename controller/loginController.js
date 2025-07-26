const User = require("../models/userSchema");
const bcrypt = require("bcrypt");

const getLogin = async(req,res)=>{
    try {
       return res.render("login");
    } catch (error) {
        console.log("Error",error);

    }
}

const postLogin = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const existingUser = await User.findOne({email});

        if(!existingUser){
            res.status(400).json({message:"Invalid user name"});
        }

        const verifyPassword = await bcrypt.compare(password,existingUser.password);

        if(!verifyPassword){
            res.status(400).json({message:"Invalid password"});
        }

        res.render("home"); 

    } catch (error) {
        console.log("Error",error);
    }
}

const logOut = async(req,res)=>{
    try {
       return res.redirect("login");
    } catch (error) {
        console.error("Error",error);
    }
}


module.exports = {
    getLogin,
    postLogin,
    logOut
}