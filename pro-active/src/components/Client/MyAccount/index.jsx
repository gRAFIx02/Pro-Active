import './index.scss'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const MyAccount = () => 
{

  const navigate = useNavigate();

  const logOut = async (e) => 
  {
    e.preventDefault();
    try 
    {
      await axios({
        method: 'post',
        url: "http://localhost:5000/logout",
        withCredentials: 'true',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },

      })
      localStorage.removeItem("logged-in-user");
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
    }


  };

  const deluser = async (e) => 
  {
    e.preventDefault();
    try 
    {
      await axios({
        method: 'post',
        url: "http://localhost:5000/deleteuser",
        withCredentials: 'true',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },

      })
      localStorage.removeItem("logged-in-user");
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
          url: "http://localhost:5000/userinfo",
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

  const userimg = async (e) => {
    e.preventDefault();
    try 
    {
      await axios({
        method: 'post',
        url: 'http://localhost:5000/userimage',
        withCredentials: 'true',
        data: {
          img: img ,
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })

    } catch (error) {
        console.log(error)
      
    }
  }; 

  

  


  return (
    <>
      <div className='logout'>
        <button onClick={logOut} className='logout_btn'>
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
        <button onClick={userimg}>Upload</button>

        {/* Name */}
        {data.map((user) => {
          return (
        <div className='info'>
          <label>Name : </label>
          
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
          <label>Username : </label>
          <div className='textfield'>{user.username}</div>
        </div>
        );
      })}


        {/* Email */}
        
        {data.map((user) => {
          return (
        <div className='info'>
          <label>Email : </label>
          <div className='textfield'>{user.email}</div>
        </div>
         );
        })}
  

        {/* Age */}
        
        {data.map((user) => {
          return (
        <div className='info'>
          <label>Age : </label>
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
          <label>Height : </label>
          <div className='textfield'>{user.height}</div>
        </div>
          );
        })}
   
      

        {/* Weight */}
        
        {data.map((user) => {
          return (
        <div className='info'>
          <label>Weight : </label>
          <div className='textfield'>{user.weight}</div>
          <div className='edit'>
            <button>Edit</button>
          </div>
        </div>
        );
      })}
 

        {/* Focus */}
        
        {data.map((user) => {
          return (
        <div className='info'>
          <label>Focus : </label>
          <div className='textfield'>{user.focus}</div>
          <div className='edit'>
            <button>Edit</button>
          </div>
        </div>
        );
      })}
 

        {/* Type */}
        
        {data.map((user) => {
          return (
        <div className='info'>
          <label>Type : </label>
          <div className='textfield'>{user.type}</div>
          <div className='edit'>
            <button>Edit</button>
          </div>
        </div>
        );
      })}
 

        {/* Current Level */}
        
        {data.map((user) => {
          return (

        <div className='info'>
          <label>Current Level : </label>
          <div className='textfield'>{user.current_level}</div>
          <div className='edit'>
            <button>Edit</button>
          </div>
        </div>
         );
        })}
   

        <div className='change'>
          <button>Change Password</button>
        </div>
        <div className='delete' onClick={deluser}>
          <button>Delete Account</button>
        </div>

      </div>
    </>
  )
}

export default MyAccount