import {addTrainerplan,getTrainerWorkout,getAllTrainerWorkot,getThreeWorkout,addTrainerplan1} from "../../controllers/users.js"


export const trainerPlan = async(req, res, next) => {

    const username=req.user.username; 


    const {planname, category, difficulty,description,img,a1,a2,a3,a4,a5,b1,b2,b3,b4,b5,c1,c2,c3,c4,c5,d1,d2,d3,d4,d5,
      e1,e2,e3,e4,e5,f1,f2,f3,f4,f5,g1,g2,g3,g4,g5
    } = req.body;

    
    //console.log(img.length);
    
    let str=img;
    let str1="../image/trainer_plan/";

    for (let i = 12; i < str.length; i++) {
        str1+=str[i];
      }

      console.log(str1);

      console.log(a1);


    try {
      const response = await addTrainerplan(planname, username, category, difficulty,description,str1)
      const response1 = await addTrainerplan1(planname, a1, a2, a3,a4,a5)
      const response2 = await addTrainerplan1(planname, b1, b2, b3,b4,b5)
      const response3 = await addTrainerplan1(planname, c1, c2, c3,c4,c5)
      const response4 = await addTrainerplan1(planname, d1, d2, d3,d4,d5)
      const response5 = await addTrainerplan1(planname, e1, e2, e3,e4,e5)
      const response6 = await addTrainerplan1(planname, f1, f2, f3,f4,f5)
      const response7 = await addTrainerplan1(planname, g1, g2, g3,g4,g5)
        return res.json({message: response});
    }
    catch (error) {
      console.log(error);
      res.status(400).json({error: error});
    }
     
    console.log(a2);
  
    

    
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
