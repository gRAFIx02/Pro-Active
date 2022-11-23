import {addTrainerplan,getTrainerWorkout,getAllTrainerWorkot,getThreeWorkout} from "../../controllers/users.js"


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
  

  
export const  Trainerworkoutplans = async(req,res) => {
    
  console.log(req.user.username);

  await getTrainerWorkout(req.user.username)
  .then((data) => {
       console.log(data);
      return res.json({data: data});
  }).catch((error) => {
      return res.status(400).send({error: error});
  })
}


  
export const  workoutPlanForUser = async(req,res) => {
    
  await getAllTrainerWorkot()
  .then((data) => {
       console.log(data);
      return res.json({data: data});
  }).catch((error) => {
      return res.status(400).send({error: error});
  })
}

  
export const  getthreeWorkPlan = async(req,res) => {
    
  await getThreeWorkout()
  .then((data) => {
       console.log(data);
      return res.json({data: data});
  }).catch((error) => {
      return res.status(400).send({error: error});
  })
}
