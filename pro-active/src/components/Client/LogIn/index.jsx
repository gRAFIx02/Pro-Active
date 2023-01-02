import './index.scss'
import Loader from '../Loader'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";
import { useEffect } from 'react'

const LogIn = () => 
{

    const [usernameORemail, setusernameORemail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate(); 

    useEffect(() =>
    {
      if(localStorage.getItem("logged-in-user"))
      {
        navigate("/user_homepage");
      }
    });

    const Auth = async (e) => {
        e.preventDefault();
        try 
        {
          await axios({
            method: 'post',
            url: 'http://localhost:5000/login',
            withCredentials: 'true',
            data: {
              usernameORemail: usernameORemail,
              password: password,
            },
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          })
          .then((response) =>
          {
              console.log(response);
              localStorage.setItem("logged-in-user", JSON.stringify(response.data));
              navigate("/user_homepage");
          });

        } catch (error) {
          if (error.response) {
            setMsg('Invalid username or password!');
          }
        }
      }; //auth end

    return (
        <>
            <div className='main'>
                <div className='sub-main'>
                    <form onSubmit={Auth}>
                        <div className='icon'>
                            <div className='container-icon'>
                                <FontAwesomeIcon icon={faUser} color="white" className='user' />
                            </div>
                        </div>
                        <p className="has-text-centered">{msg}</p>
                        <div className='username'>
                            <h3 className='label_user'>Email or username:</h3>
                            <FontAwesomeIcon icon={faEnvelope} color="black" className='in_icon' />
                            <input
                            type='text' 
                            placeholder='E-mail or username' 
                            className='log_input' 
                            value={usernameORemail}
                            onChange={(e) => setusernameORemail(e.target.value)}
                            />
                        </div>
                        <div className='password_div'>
                            <h3 className='label_password'>Password:</h3>
                            <FontAwesomeIcon icon={faKey} color="black" className='in_icon' />
                            <input
                             type='password' 
                             placeholder='Password' 
                             className='log_input'
                             value={password}
                             onChange={(e) => setPassword(e.target.value)} 
                             />
                        </div>
                        <div className='login_div'>
                           
                                <button className='btn'>Log In</button>
                            
                        </div>
                        <p>
                            <br></br>
                            <Link to='/signupoption'>
                                New here? Register now!
                            </Link>
                            <br></br>
                            <br></br>
                            <Link to='/trainer_login' className='trainer'>
                                Are you a trainer? Click here!
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
            <Loader />
        </>
    )
}

export default LogIn