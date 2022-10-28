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
  
export const addUser = async(name, username, email, password) => {
  try {
    const response = await new Promise((resolve, reject) => {
      db.execute(
        'INSERT INTO `user_info` (`name`, `username`, `email`, `password`) VALUES (?, ?, ?, ?)',
        [name,username, email, password], 
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

export const addtrainer = async(name, username, email, password) => {
  try {
    const response = await new Promise((resolve, reject) => {
      db.execute(
        'INSERT INTO `trainer_info` (`name`, `username`, `email`, `password`) VALUES (?, ?, ?, ?)',
        [name,username, email, password], 
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

