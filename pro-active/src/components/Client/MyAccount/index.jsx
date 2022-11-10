import './index.scss'


import React, { useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";




const MyAccount = () =>
{

    const navigate = useNavigate();

    
    const logOut = async (e) => {
        e.preventDefault();
        try {
          await axios({
            method: 'post',
            url: "http://localhost:5000/logout",
            withCredentials: 'true',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            
          })
          navigate("/");
        } catch (error) {
          console.log(error.response.data);     
        }

        
      };

    
    return(
        <>
            <div className='logout'>
                <button onClick={logOut} className='logout_btn'>
                    Log Out
                </button>
            </div>
        </>
    )
}

export default MyAccount