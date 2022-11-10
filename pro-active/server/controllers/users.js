import db from "../config/Database.js";

export const getAllUsers = async(count) => {
  try {
    const response = await new Promise((resolve, reject) => {
        db.execute('SELECT * FROM `user_info` LIMIT ?', 
        [count], (err, results) => {
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

