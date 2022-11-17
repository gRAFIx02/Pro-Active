import {getThreeExercise} from "../../controllers/users.js"

export const  exercise_info = async(req,res) => {
    await getThreeExercise()
    .then((data) => {
         console.log(data);
        return res.json({data: data});
    }).catch((error) => {
        return res.status(400).send({error: error});
    })
}