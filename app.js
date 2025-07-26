const express = require("express")
const app = express();
const path = require("path");
const userRouter = require("./routes/userRouter");
const connectDB = require("./config/db");

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));


app.use("/",userRouter);

app.listen(3000,()=>{
    console.log("Running...")
})