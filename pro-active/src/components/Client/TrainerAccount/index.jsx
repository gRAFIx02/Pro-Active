import './index.scss'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";



const TrainerAccount = () => {
  const navigate = useNavigate();


  const logOut = async (e) => {
    e.preventDefault();
    try {
      await axios({
        method: 'post',
        url: "http://localhost:5000/logout1",
        withCredentials: 'true',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },

      })
      localStorage.removeItem("logged-in-trainer");
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
    }


  };


  
  const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async() => {
        await axios({
          method: 'get',
          url: "http://localhost:5000/trainerinfo",
          withCredentials: 'true',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          responseType: 'json',
        }).then((response) => {
          setData(response.data.data);
          console.log(response.data.data);
        }).catch((err) => {
          console.log(err);
        })
      }
      fetchData();



  }, []);


  const [img, setImg] = useState("");

  const checkimg = (e) =>{
    setImg(e.target.value);
    console.log(e.target.value);
  }

  const trainerimg = async (e) => {
    e.preventDefault();
    try 
    {
      await axios({
        method: 'post',
        url: 'http://localhost:5000/trainerimage',
        withCredentials: 'true',
        data: {
          img: img ,
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })

      window.location.reload(false);

    } catch (error) {
        console.log(error)
      
    }
  }; 

  
  const deltrainer = async (e) => 
  {
    e.preventDefault();
    try 
    {
      await axios({
        method: 'post',
        url: "http://localhost:5000/deletetrainer",
        withCredentials: 'true',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },

      })
      localStorage.removeItem("logged-in-trainer");
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
    }


  };



 




  return (
    <>
      <div className='logout' >
        <button className='logout_btn' onClick={logOut}>
          Log Out
        </button>
      </div>

      <div className='backpage'>

        <div className='profilepic'>
        {data.map((user) => {
          return (
          <img src={user.img} alt='profile_pic' />
          );
        })}
        </div>

        <input type='file' className='browse' onChange={checkimg}/>
        <button onClick={trainerimg} >Upload</button>

        {/* Name */}
        {data.map((user) => {
          return (
         

        <div className='info'>
          <label>Name &emsp; &emsp; &emsp; &emsp;&nbsp; </label>
          <div className='textfield'>{user.name}</div>
          <div className='edit'>
            <button>Edit</button>
          </div>
        </div>

);
})}


        {/* Username */}
        {data.map((user) => {
          return (
        <div className='info'>
          <label>Username &emsp; &emsp; &ensp;  </label>
          <div className='textfield'>{user.username}</div>
        </div>
        );
      })}

        {/* Email */}
        
        {data.map((user) => {
          return (

        <div className='info'>
          <label>Email &emsp; &emsp; &emsp; &emsp; &ensp; </label>
          <div className='textfield'>{user.email}</div>
        </div>

);
})}


        {/* Age */}
        {data.map((user) => {
          return (
        <div className='info'>
          <label>Age &emsp; &emsp; &emsp; &emsp; &emsp;  </label>
          <div className='textfield'>{user.age}</div>
          <div className='edit'>
            <button>Edit</button>
          </div>
        </div>
        );
      })}
      

        {/* Height */}
        {data.map((user) => {
          return (
        <div className='info'>
          <label>Height &emsp; &emsp; &emsp; &emsp;  </label>
          <div className='textfield'>{user.height}</div>
        </div>
         );
        })}
        
  

        {/* Weight */}
        {data.map((user) => {
          return (
        <div className='info'>
          <label>Weight &emsp; &emsp; &emsp; &emsp; </label>
          <div className='textfield'>{user.weight}</div>
          <div className='edit'>
            <button>Edit</button>
          </div>
        </div>
         );
        })}
        

        {/* Expertise */}

        
        
        <div className='info'>
          <label>Expertise &emsp; &emsp; &emsp;  </label>
          {data.map((user) => {
          return (
          <div className='textfield'>{user.expertise}</div>
          );
        })}
        
        </div>
        </div>
     
      <div className='change'>
        <Link to='/user_homepage/my_ac/change_password'>
            <button>Change Password</button>
        </Link>
      </div>
      <div className='delete'>
        <button onClick={deltrainer}>Delete Account</button>
      </div>
    </>
  )
}

export default TrainerAccount