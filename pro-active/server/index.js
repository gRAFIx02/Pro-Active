import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import db from "./config/Database.js";

import { register, login, verifyToken, logout,trainer_register,trainerlogin, verifyToken1,logout1} from "./middlewares/auth/auth.js";
import { bypassCORS } from "./middlewares/Setup.js";
import { exercise_info,exercise_all_info } from "./middlewares/packages/exercise_list.js";
import  {nutrition_info,nutrition_all_info} from "./middlewares/packages/nutrition_list.js";
import {trainerPlan ,Trainerworkoutplans} from "./middlewares/packages/trainer.js"

dotenv.config();
const app = express();

// request parsers
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cookieParser(process.env.COOKIE_SECRET));



///routing setup



app.post("/register",bypassCORS, register);
app.post("/login",bypassCORS,verifyToken,login);
app.post("/logout",bypassCORS,verifyToken,logout);
app.post("/logout1",bypassCORS,verifyToken1,logout1);
app.post("/trainer_register",bypassCORS, trainer_register);
app.post("/trainer_login",bypassCORS, verifyToken1,trainerlogin);
app.get("/exercise_info",bypassCORS,verifyToken,exercise_info);
app.get("/nutrition_info",bypassCORS,verifyToken,nutrition_info);
//app.get("/exercise_all_info",bypassCORS,exercise_all_info);
app.get("/nutrition_all_info",bypassCORS,verifyToken,nutrition_all_info);
app.post("/addTrainerPlan",bypassCORS,verifyToken1,trainerPlan);
app.get("/MytrainingPlans",bypassCORS,verifyToken1,Trainerworkoutplans);
 
app.listen(5000, ()=> console.log('Server running at port 5000'));