import db from "../config/Database.js";

export const getAllUsers = async(count) => {
  try {
    const response = await new Promise((resolve, reject) => {
        db.execute('SELECT * FROM `user_info` ', 
         (err, results) => {
            if (err) reject(new Error(err.message));
            resolve(results);
        })
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export const getUser = async(usernameORemail) => {
  try {
    const user = await new Promise((resolve, reject) => {
      db.execute('SELECT * FROM `user_info` WHERE `username`=? OR `email`=?',
      [usernameORemail,usernameORemail],
      (err, results) => {
        if(err) reject (err.message);
        resolve(results);
      })
    });
    return user;
  } catch (error) {
    throw error;
  }
}


export const getTrainer = async(usernameORemail) => {
  try {
    const user = await new Promise((resolve, reject) => {
      db.execute('SELECT * FROM `trainer_info` WHERE `username`=? OR `email`=?',
      [usernameORemail,usernameORemail],
      (err, results) => {
        if(err) reject (err.message);
        resolve(results);
      })
    });
    return user;
  } catch (error) {
    throw error;
  }
}
  
export const addUser = async(name, username, email, password,age,height,weight,focus,type,current_level) => {

  
  try {
    const response = await new Promise((resolve, reject) => {
      db.execute(
        'INSERT INTO `user_info` (`name`, `username`, `email`, `password`, `age` ,`height`,`weight`,`focus`,`type`,`current_level`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [name,username, email, password,age,height,weight,focus,type,current_level], 
        (err, results) => {
        if (err) {
            reject(err.message);
        }
        resolve(results);
      })
    });
    return response;
  } catch (error) {
    throw error;
  }
}


export const addUserimage = async(username,img) => {

  
  try {
    const response = await new Promise((resolve, reject) => {
      db.execute(
        'update `user_info`  set   `img`=?  where `username`=?',
        [img,username], 
        (err, results) => {
        if (err) {
            reject(err.message);
        }
        resolve(results);
      })
    });
    return response;
  } catch (error) {
    throw error;
  }
}



export const addTrainerimage = async(username,img) => {

  
  try {
    const response = await new Promise((resolve, reject) => {
      db.execute(
        'update `trainer_info`  set   `img`=?  where `username`=?',
        [img,username], 
        (err, results) => {
        if (err) {
            reject(err.message);
        }
        resolve(results);
      })
    });
    return response;
  } catch (error) {
    throw error;
  }
}






export const addtrainer = async(name, username, email, password,age,height,weight,expertise) => {
  try {
    const response = await new Promise((resolve, reject) => {
      db.execute(
        'INSERT INTO `trainer_info` (`name`, `username`, `email`, `password`, `age`, `height`, `weight`, `expertise`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [name,username, email, password,age,height,weight,expertise], 
        (err, results) => {
        if (err) {
            reject(err.message);
        }
        resolve(results);
      })
    });
    return response;
  } catch (error) {
    throw error;
  }
}

//exercise_info table 
export const getThreeExercise = async(count) => {
  try {
    const response = await new Promise((resolve, reject) => {
        db.execute('SELECT * FROM `exercise_info` order by rand()  limit 3', 
         (err, results) => {
            if (err) reject(new Error(err.message));
            resolve(results);
        })
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export const getAllExercise = async(count) => {
  try {
    const response = await new Promise((resolve, reject) => {
        db.execute('SELECT * FROM `exercise_info`', 
         (err, results) => {
            if (err) reject(new Error(err.message));
            resolve(results);
        })
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}


//nutrition_info
 
export const getThreeNutrition = async(count) => {
  try {
    const response = await new Promise((resolve, reject) => {
        db.execute('SELECT * FROM `nutrition_info` order by rand()  limit 3', 
         (err, results) => {
            if (err) reject(new Error(err.message));
            resolve(results);
        })
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export const getAllNutrition = async(count) => {
  try {
    const response = await new Promise((resolve, reject) => {
        db.execute('SELECT * FROM `nutrition_info`', 
         (err, results) => {
            if (err) reject(new Error(err.message));
            resolve(results);
        })
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}


//trainer_exercise_training_plan
export const addTrainerplan = async(planname, username, category, difficulty,description,img) => {

  
  try {
    const response = await new Promise((resolve, reject) => {
      db.execute(
        'INSERT INTO `workout_info` (`plan_name`, `uploaded_by`, `category`, `difficulty`, `description` ,`img`) VALUES (?, ?, ?, ?, ?, ?)',
        [planname,username, category, difficulty,description,img], 
        (err, results) => {
        if (err) {
            reject(err.message);
        }
        resolve(results);
      })
    });
    return response;
  } catch (error) {
    throw error;
  }
}

export const addCustomplan = async(planname, username, category, difficulty,description,img) => {

  
  try {
    const response = await new Promise((resolve, reject) => {
      db.execute(
        'INSERT INTO `my_plan_info` (`plan_name`, `username`, `category`, `difficulty`, `desc` ,`img`) VALUES (?, ?, ?, ?, ?, ?)',
        [planname,username, category, difficulty,description,img], 
        (err, results) => {
        if (err) {
            reject(err.message);
        }
        resolve(results);
      })
    });
    return response;
  } catch (error) {
    throw error;
  }
}

export const addTrainerplan1 = async(planname, day, workout_1, workout_2,workout_3,workout_4) => {

  
  try {
    const response = await new Promise((resolve, reject) => {
      db.execute(
        'INSERT INTO `workout` (`plan_name`, `day`, `workout_1`, `workout_2`, `workout_3` ,`workout_4`) VALUES (?, ?, ?, ?, ?, ?)',
        [planname,day, workout_1, workout_2,workout_3,workout_4], 
        (err, results) => {
        if (err) {
            reject(err.message);
        }
        resolve(results);
      })
    });
    return response;
  } catch (error) {
    throw error;
  }


}


export const addCustomplan1 = async(planname, day, workout_1, workout_2,workout_3,workout_4) => {

  
  try {
    const response = await new Promise((resolve, reject) => {
      db.execute(
        'INSERT INTO `my_plan` (`plan_name`, `day`, `workout_1`, `workout_2`, `workout_3` ,`workout_4`) VALUES (?, ?, ?, ?, ?, ?)',
        [planname,day, workout_1, workout_2,workout_3,workout_4], 
        (err, results) => {
        if (err) {
            reject(err.message);
        }
        resolve(results);
      })
    });
    return response;
  } catch (error) {
    throw error;
  }


}

export const addNutritionplan = async(planname, username,description,img) => {

  
  try {
    const response = await new Promise((resolve, reject) => {
      db.execute(
        'INSERT INTO `nutrition_info` (`plan_name`, `uploaded_by`, `description` ,`img`) VALUES (?, ?, ?, ?)',
        [planname,username,description,img], 
        (err, results) => {
        if (err) {
            reject(err.message);
        }
        resolve(results);
      })
    });
    return response;
  } catch (error) {
    throw error;
  }
}


export const addNutritionplan1 = async(planname, day, breakfast, lunch,snacks,dinner) => {

  
  try {
    const response = await new Promise((resolve, reject) => {
      db.execute(
        'INSERT INTO `nutrition` (`plan_name`, `day`, `breakfast`, `lunch`, `snacks` ,`dinner`) VALUES (?, ?, ?, ?, ?, ?)',
        [planname,day,breakfast,lunch,snacks,dinner], 
        (err, results) => {
        if (err) {
            reject(err.message);
        }
        resolve(results);
      })
    });
    return response;
  } catch (error) {
    throw error;
  }
}



export const getTrainerNutrition = async(username) => {
  try {
    const response = await new Promise((resolve, reject) => {
      db.execute('SELECT * FROM `nutrition_info` WHERE `uploaded_by`=? ',
      [username],
         (err, results) => {
            if (err) reject(new Error(err.message));
            resolve(results);
        })
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}





export const getTrainerWorkout = async(username) => {
  try {
    const response = await new Promise((resolve, reject) => {
      db.execute('SELECT * FROM `workout_info` WHERE `uploaded_by`=? ',
      [username],
         (err, results) => {
            if (err) reject(new Error(err.message));
            resolve(results);
        })
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export const getCustomWorkout = async(username) => {
  try {
    const response = await new Promise((resolve, reject) => {
      db.execute('SELECT * FROM `my_plan_info` WHERE `username`=? ',
      [username],
         (err, results) => {
            if (err) reject(new Error(err.message));
            resolve(results);
        })
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}




export const getAllTrainerWorkot = async(count) => {
  try {
    const response = await new Promise((resolve, reject) => {
        db.execute('SELECT * FROM `workout_info`', 
         (err, results) => {
            if (err) reject(new Error(err.message));
            resolve(results);
        })
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}



export const getThreeWorkout = async(count) => {
  try {
    const response = await new Promise((resolve, reject) => {
        db.execute('SELECT * FROM `workout_info` order by rand()  limit 3', 
         (err, results) => {
            if (err) reject(new Error(err.message));
            resolve(results);
        })
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export const getWorkoutPlan = async(plan_name) => {
  try {
    const response = await new Promise((resolve, reject) => {
        db.execute('SELECT * FROM `workout` WHERE `plan_name`=? ', 
        [plan_name],
         (err, results) => {
            if (err) reject(new Error(err.message));
            resolve(results);
        })
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export const getWorkoutPlan1 = async(plan_name) => {
  try {
    const response = await new Promise((resolve, reject) => {
        db.execute('SELECT * FROM `my_plan` WHERE `plan_name`=? ', 
        [plan_name],
         (err, results) => {
            if (err) reject(new Error(err.message));
            resolve(results);
        })
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}


export const getNutritionPlan = async(plan_name) => {
  try {
    const response = await new Promise((resolve, reject) => {
        db.execute('SELECT * FROM `nutrition` WHERE `plan_name`=? ', 
        [plan_name],
         (err, results) => {
            if (err) reject(new Error(err.message));
            resolve(results);
        })
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}



export const deleteUser = async(usernameORemail) => {
  try {
    const user = await new Promise((resolve, reject) => {
      db.execute('Delete FROM `user_info` WHERE `username`=? OR `email`=?',
      [usernameORemail,usernameORemail],
      (err, results) => {
        if(err) reject (err.message);
        resolve(results);
      })
    });
    return user;
  } catch (error) {
    throw error;
  }
}

export const deleteTrainer = async(usernameORemail) => {
  try {
    const user = await new Promise((resolve, reject) => {
      db.execute('Delete FROM `trainer_info` WHERE `username`=? OR `email`=?',
      [usernameORemail,usernameORemail],
      (err, results) => {
        if(err) reject (err.message);
        resolve(results);
      })
    });
    return user;
  } catch (error) {
    throw error;
  }
}



export const addtrainertips = async(desc,username) => {
  try {
    const response = await new Promise((resolve, reject) => {
      db.execute(
        'INSERT INTO `trainertips` (`tips`, `username`) VALUES (?, ?)',
        [desc,username], 
        (err, results) => {
        if (err) {
            reject(err.message);
        }
        resolve(results);
      })
    });
    return response;
  } catch (error) {
    throw error;
  }
}


export const getTrainerTips = async(username) => {
  try {
    const user = await new Promise((resolve, reject) => {
      db.execute('SELECT * FROM `trainertips` WHERE `username`=? ',
      [username],
      (err, results) => {
        if(err) reject (err.message);
        resolve(results);
      })
    });
    return user;
  } catch (error) {
    throw error;
  }
}


export const addTrainerPlan1 = async(trainername,trainerplanname,username,type) => {
  try {
    const response = await new Promise((resolve, reject) => {
      db.execute(
        'INSERT INTO `addtrainersplan` (`trainername`, `username`,`trainerplanname`,`type`) VALUES (?, ?, ? , ?)',
        [trainername,username,trainerplanname,type], 
        (err, results) => {
        if (err) {
            reject(err.message);
        }
        resolve(results);
      })
    });
    return response;
  } catch (error) {
    throw error;
  }
}



export const getTrainernametogetTips = async(username,type) => {
  try {
    const user = await new Promise((resolve, reject) => {
      db.execute('SELECT `trainername` FROM `addtrainersplan` WHERE `username`=?  and `type`=?',
      [username,type],
      (err, results) => {
        if(err) reject (err.message);
        resolve(results);
      })
    });
    return user;

  } catch (error) {
    console.log("EROR IN ME")
    throw error;
  }
}




export const gTips = async(username,type) => {
  try {
    const user = await new Promise((resolve, reject) => {
      db.execute('SELECT * FROM pro_active.trainertips where username in (select trainername from pro_active.addtrainersplan where `username`=? and `type` =?)',
      [username,type],
      (err, results) => {
        if(err) reject (err.message);
        resolve(results);
      })
    });
    return user;
  } catch (error) {
    throw error;
  }
}

export const gnutri = async(username,type) => {
  try {
    const user = await new Promise((resolve, reject) => {
      db.execute('SELECT * FROM pro_active.nutrition_info where plan_name in (select trainerplanname from pro_active.addtrainersplan where `username`=? and `type` =?)',
      [username,type],
      (err, results) => {
        if(err) reject (err.message);
        resolve(results);
      })
    });
    return user;
  } catch (error) {
    throw error;
  }
}

export const gexer = async(username,type) => {
  try {
    const user = await new Promise((resolve, reject) => {
      db.execute('SELECT * FROM pro_active.workout_info where plan_name in (select trainerplanname from pro_active.addtrainersplan where `username`=? and `type` =?)',
      [username,type],
      (err, results) => {
        if(err) reject (err.message);
        resolve(results);
      })
    });
    return user;
  } catch (error) {
    throw error;
  }
}