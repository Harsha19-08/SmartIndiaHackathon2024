require ('dotenv').config();

const config = require('./config.json');
const mongoose = require('mongoose');

mongoose.connect(config.connectionString);


const User = require('./models/user_model');

const express = require('express');
const cors = require('cors');
const app = express();


const jwt = require('jsonwebtoken');
const {authenticateToken} = require('./utilities');
app.use(express.json());

app.use(
    cors({
        origin: '*',
        // credentials: true,
    })
);  

app.get("/" , (req, res) => {   
        res.send("Hello World");
});
app.post("/create-account",async (req,res) => {

    const {fullName,email, password} = req.body;
   
    if(!fullName){
        return res
       .status(400)
       .json({ error:true ,message: "Full Name is required"});
    }
    if(!email){
        return res
       .status(400)
       .json({error:true, message: "Email is required"});
    }
    if(!password){
        return res
       .status(400)
       .json({error:true, message: "Password is required"});
    }   

    const isUser =await User.findOne({email :email});

    if(isUser){
        return res
       .status(400)
       .json({error:true, message: "User already exists"});
    }
    const user =new User({
        fullName,
        email,
        password,
    }); 
    await user.save();

    const accessToken =jwt.sign({ user}, process.env.ACCESS_TOKEN_SECRET,{
        expiresIn: '1d',
    });
  return res.json({
    error: false,
    user,
    accessToken,
    message: "User created successfully",
  });


});

app.post("/login", async (req, res) => {
    const {email, password} = req.body;

    if(!email){
        return res
       .status(400)
       .json({error:true, message: "Email is required"});
    }
    if(!password){
        return res
       .status(400)
       .json({error:true, message: "Password is required"});
    }
  const userInfo= await User.findOne({email :email});

  if(!userInfo){
    return res
   .status(400)
   .json({error:true, message: "User does not exist"});
  }

  if(userInfo.email === email && userInfo.password === password){
    const accessToken =jwt.sign({ userInfo}, process.env.ACCESS_TOKEN_SECRET,{
        expiresIn: '1d',
    });
    return res.json({
        error: false,
        userInfo,
        accessToken,
        message: "User logged in successfully",
      });
  }else {
    return res
   .status(400)
   .json({error:true, message: "Invalid credentials"});
  }
   
});

app.get("/get-user", authenticateToken, async (req, res) => {
    console.log('Request User:', req.user); 
    if (!req.user || !req.user.userInfo) {
      return res.status(400).json({ error: true, message: "User information not available" });
  }
    const userId = req.user.userInfo._id;
    const isUser = await User.findOne({ _id: userId });
    if(!isUser){
        return res.sendStatus(400);
    }   
   return res.json({
    error: false,
    user: isUser,
    message: "User found",
  });
});

app.listen(process.env.PORT || 8000, () => {
    console.log("Server is running on port 8000");
});
module.exports = app;
