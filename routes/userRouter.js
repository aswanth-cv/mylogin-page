const express = require("express")
const userRouter = express.Router();
const loginController = require("../controller/loginController")
const signupController =require("../controller/signupController");




userRouter.get("/signup",signupController.getSignup);
userRouter.post("/signup",signupController.postSignup);

userRouter.get("/login",loginController.getLogin);
userRouter.post("/login",loginController.postLogin);

userRouter.post("/logout",loginController.logOut);



module.exports = userRouter;