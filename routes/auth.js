const express =require('express');
const router=express.Router();
const bcrypt=require("bcrypt");
const {
  validateName,validateEmail,validatePass
}=require("../utils/validate.js");
let users={
  
}

router.post("/signUp",async (req,res)=>{
  try{
    const {name,email,password}=req.body;
    console.log(name,email,password);
    const userExist=users.hasOwnProperty(email);
    if(userExist){
      res.send("user exist");
    }

    if(!validateName(name)){
      res.send("invalid name ❌");
    }
    if(!validateEmail(email)){
      res.send("invalid email ❌");
    }
    if(!validatePass(password)){
      res.send("invalid pass ❌");
    }

    const epass=await bcrypt.hash(password,10);
console.log("password:",epass);
    users[email]={name,password:epass};
    res.send(" Succes...👍👍 👍👍 ");
  }
  catch(e){
    res.send("err...😵❌ ");
  }
})

router.post("/signIn",async (req,res)=>{
  try{
    const {email,password}=req.body;
    const userExist=users.hasOwnProperty(email);
    
    if(!userExist){
      res.send("user not exist ☠️☠️☠️☠️☠️");
    }
    const passMatch=await bcrypt.compare(password,users[email].password);
    if(!passMatch){
      res.send("Password not match ❌");
    }
    res.send("👍succes signin")
  }
  catch(e){
    console.log(e,"❌");
  }
})
module.exports=router;
