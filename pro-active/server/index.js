import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import db from "./config/Database.js";

import { register, login, verifyToken, logout,trainer_register,trainerlogin, verifyToken1,logout1,plansperday,getplansperday1,nutritionsperday, getnutritionperday1, addtips, addplan1, addplan2} from "./middlewares/auth/auth.js";
import { bypassCORS } from "./middlewares/Setup.js";
import { exercise_info,exercise_all_info } from "./middlewares/packages/exercise_list.js";
import  {nutrition_info,nutrition_all_info} from "./middlewares/packages/nutrition_list.js";
import {trainerPlan ,Trainerworkoutplans,workoutPlanForUser,getthreeWorkPlan,NutritionPlan,Trainernutritionplans,
    addimgtrainer,deltrainer,trainer_information,getTrainertips, Exctips, Exctips1
} from "./middlewares/packages/trainer.js"
import {user_information,addimguser,deluser} from "./middlewares/packages/user.js"
import { addtrainer } from "./controllers/users.js";

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
app.get("/getallworkout",bypassCORS,verifyToken,workoutPlanForUser); 
app.get("/getthreeworkouts",bypassCORS,verifyToken,getthreeWorkPlan);
app.get("/exercise_info1",bypassCORS,verifyToken1,exercise_info);
app.get("/nutrition_info1",bypassCORS,verifyToken1,nutrition_info);
app.get("/getthreeworkouts1",bypassCORS,verifyToken1,getthreeWorkPlan);

app.get("/userinfo",bypassCORS,verifyToken,user_information);

app.post("/userimage",bypassCORS,verifyToken,addimguser);

app.post("/deleteuser",bypassCORS,verifyToken,deluser);

app.post("/addNutritionPlan",bypassCORS,verifyToken1,NutritionPlan);
app.get("/MyNutritionPlans",bypassCORS,verifyToken1,Trainernutritionplans);


app.get("/trainerinfo",bypassCORS,verifyToken1,trainer_information);

app.post("/trainerimage",bypassCORS,verifyToken1,addimgtrainer);

app.post("/deletetrainer",bypassCORS,verifyToken1,deltrainer);

app.post("/plansperday",bypassCORS,plansperday);

app.get("/getplansperday",bypassCORS,getplansperday1);

app.get("/MyTips",bypassCORS,verifyToken1,getTrainertips);

app.post("/nutritionplansperday",bypassCORS,nutritionsperday);

app.get("/getnutritionplansperday",bypassCORS,getnutritionperday1);

app.post("/addtips",bypassCORS,verifyToken1,addtips);

app.post("/addthisplan",bypassCORS,verifyToken,addplan1);

app.post("/addthisplan1",bypassCORS,verifyToken,addplan2);

app.get("/gettipsforuser",bypassCORS,verifyToken,Exctips);

app.get("/gettipsforuser1",bypassCORS,verifyToken,  Exctips1);

app.listen(5000, ()=> console.log('Server running at port 5000'));