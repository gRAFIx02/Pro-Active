import {getUser,addUserimage,deleteUser} from "../../controllers/users.js"


export const  user_information = async(req,res) => {
    


    await getUser(req.user.username)
    .then((data) => {
         console.log(data);
        return res.json({data: data});
    }).catch((error) => {
        return res.status(400).send({error: error});
    })
}


export const addimguser = async(req, res, next) => {

    const username=req.user.username; 


    const {img} = req.body;

    
    //console.log(img.length);
    
    let str=img;
    let str1="../image/default/";

    for (let i = 12; i < str.length; i++) {
        str1+=str[i];
      }

      console.log(str1);

      console.log("hi " + username);


    try {
      const response = await addUserimage(username,str1)
      console.log("hi");
        return res.json({message: response});
    }
    catch (error) {
      console.log(error);
      res.status(400).json({error: error});
    }
     
    console.log(a2);
  
    

    
  }


  export const deluser = async(req, res, next) => {

    const username=req.user.username; 

    res.clearCookie('access_token');


    try {
      const response = await deleteUser(username)
      console.log("hi");
        return res.json({message: response});
    }
    catch (error) {
      console.log(error);
      res.status(400).json({error: error});
    }
     

    
  }

