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