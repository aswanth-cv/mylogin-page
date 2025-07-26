const mongoose = require("mongoose");


const connectDB = async(req,res)=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/Dream");
        console.log("DB connected");
    } catch (error) {
        console.log("Db connection error",error);
        
    }
}

module.exports = connectDB;