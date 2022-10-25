import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import db from "./config/Database.js";

import { register, login, verifyToken, logout } from "./middlewares/auth/auth.js";
import { bypassCORS } from "./middlewares/Setup.js";


dotenv.config();
const app = express();

// request parsers
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cookieParser(process.env.COOKIE_SECRET));



//routing setup



app.post("/register",bypassCORS, register);
app.post("/login",bypassCORS, login);


 
app.listen(5000, ()=> console.log('Server running at port 5000'));