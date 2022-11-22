import {addTrainerplan} from "../../controllers/users.js"


export const trainerPlan = async(req, res, next) => {

    const username=req.user.username; 


    const {planname, category, difficulty,description,img} = req.body;

    
    //console.log(img.length);
    
    let str=img;
    let str1="../image/trainer_plan/";

    for (let i = 12; i < str.length; i++) {
        str1+=str[i];
      }

      console.log(str1);


    try {
      const response = await addTrainerplan(planname, username, category, difficulty,description,str1)
   
        return res.json({message: response});
    }
    catch (error) {
      console.log(error);
      res.status(400).json({error: error});
    }
  }
  