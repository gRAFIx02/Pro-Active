import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer"

import {addUser,getUser,addtrainer,getTrainer} from "../../controllers/users.js"

const salt_rounds = 10



export const register = async(req, res, next) => {
  const {name,username, email, password,confPassword,age,height,weight,focus,type,current_level} = req.body;
  try {
   
    const hashPassword = bcrypt.hashSync(password, salt_rounds);
    const response = await addUser(name,username, email,hashPassword,age,height,weight,focus,type,current_level)
     
    if(response){
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
  
    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Succesfully registerted as a Pro active user",
        html: '<h1> BE A PRO BE ACTIVE  </h1>' 
    }
    console.log("hi " + email)
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Error", error);
        }
        else {
            console.log("email sent" + info.response);
            res.status(201).json({ status: 201, info })
        }
    })
  
     return res.json({message: response});
    }
  


    return res.status(400).json({error :"Invalid entry"});
  } catch (error) {
    console.log(error);
    res.status(400).json({error: error});
  }
}

export const trainer_register = async(req, res, next) => {
  const {name,username, email, password,confPassword,age,height,weight,expertise} = req.body;
  try {
    const hashPassword = bcrypt.hashSync(password, salt_rounds);
    const response = await addtrainer(name,username, email,hashPassword,age,height,weight,expertise)

    if(response){

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
  
    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Succesfully registerted as a Pro active Trainer",
        html: '<h1> BE A PRO BE ACTIVE  </h1>' 
    }
    console.log("hi " + email)
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Error", error);
        }
        else {
            console.log("email sent" + info.response);
            res.status(201).json({ status: 201, info })
        }
    })
      
      
      
      return res.json({message: response});
  }
    return res.status(400).json({error :"Invalid entry"});
  } catch (error) {
    console.log(error);
    res.status(400).json({error: error});
  }
}


export const login = async(req, res, next) => {
  
  if(req.user) {
      console.log(req.user.username, "already logged in");
      return res.json(req.user);
  }

  const {usernameORemail, password} = req.body;
  try {
    const user = await getUser(usernameORemail);

    console.log(user);
   
    // ERROR: User not found 
    if(user.length === 0) return res.status(401).json({error: "User not found"});

    const match = await bcrypt.compare(password, user[0].password);
    
    // ERROR: Wrong password
    if(!match) return res.status(401).json({error: "Wrong Password"});

    const username = user[0].username;

    // Create access token (24 hours)
    const accessToken = jwt.sign({username}, process.env.COOKIE_SECRET,{
        expiresIn: '1d'
    });

    // Set cookie (24 hours)
    res.cookie('access_token', accessToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    });

   // console.log(accessToken)

    console.log('Authentication Success');
    return res.json(user[0]); 
     

  } catch (error) {
    console.log(error);
    return res.status(400).json({error: error});
  }

}

export const trainerlogin = async(req, res, next) => {
  
  if(req.user) {
      console.log(req.user.username, "already logged in");
      return res.json(req.user);
  }

  const {usernameORemail, password} = req.body;
  try {
    const user = await getTrainer(usernameORemail);

    

    console.log(user);
   
    // ERROR: User not found 
    if(user.length === 0) return res.status(401).json({error: "User not found"});

    const match = await bcrypt.compare(password, user[0].password);
    
    // ERROR: Wrong password
    if(!match) return res.status(401).json({error: "Wrong Password"});

    const username = user[0].username;

    // Create access token (24 hours)
    const accessToken = jwt.sign({username}, process.env.COOKIE_SECRET,{
        expiresIn: '1d'
    });

    // Set cookie (24 hours)
    res.cookie('access_token', accessToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    });

   // console.log(accessToken)

    console.log('Authentication Success');
    return res.json(user[0]); 
     

  } catch (error) {
    console.log(error);
    return res.status(400).json({error: error});
  }
}


export const verifyToken = async(req, res, next) => {
  

  const accessToken = req.cookies['access_token'];
  if(accessToken) {
    try {
      const payload = jwt.verify(accessToken, process.env.COOKIE_SECRET);
      const username = payload.username;
      const user = await getUser(username);

      if(user.length != 0) {
          console.log('Token Verified');
          console.log(username);
          req.user = user[0];
      }
    } catch (error) {
        console.log(error);
    }
  }
  next();
}

export const logout = async(req, res) => {
  let msg;  
  if(req.user) {
    msg = "User logged out successfully.";
    res.clearCookie('access_token');
  } else {
    msg = "No user logged in";
  }
  console.log(msg);
  res.json({
    message: msg
  });
}