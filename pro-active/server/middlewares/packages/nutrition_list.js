import {getThreeNutrition,getAllNutrition} from "../../controllers/users.js"

export const  nutrition_info = async(req,res) => {
    await getThreeNutrition()
    .then((data) => {
         console.log(data);
        return res.json({data: data});
    }).catch((error) => {
        return res.status(400).send({error: error});
    })
}

export const  nutrition_all_info = async(req,res) => {
    await getAllNutrition()
    .then((data) => {
         console.log(data);
        return res.json({data: data});
    }).catch((error) => {
        return res.status(400).send({error: error});
    })
}