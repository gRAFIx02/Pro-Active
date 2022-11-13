import './index.scss'
import Loader from '../Loader'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
import TrainerLogo from '../../../Assets/icons/trainerlogo.png'
import React, { useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";

const TrainerLogIn = () => 
{

    const [usernameORemail, setusernameORemail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate(); 

    const Auth = async (e) => {
        e.preventDefault();
        try {
          await axios({
            method: 'post',
            url: 'http://localhost:5000/trainer_login',
            withCredentials: 'true',
            data: {
              usernameORemail: usernameORemail,
              password: password,
            },
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          })
          navigate("/trainer_homepage");

        } catch (error) {
          if (error.response) {
            setMsg('Invalid username or password!');
          }
        }
      };

    return (
        <>
            <div className='main'>
                <div className='sub-main'>
                    <form onSubmit={Auth}>
                        <div className='t_icon'>
                            <div className='t_container-icon'>
                                <img src={TrainerLogo} alt='TrainerLogo' className='t_user' />
                            </div>
                        </div>
                        <p className="has-text-centered help is-danger">{msg}</p>
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
                            &emsp; &emsp;
                            <Link to='/forgot_password'>
                                Forgot password?
                            </Link> &emsp; &emsp; &emsp; &emsp; &emsp;
                            <Link to='/signupoption'>
                                New here? Register now!
                            </Link>
                            <br></br>
                            <br></br>
                            <Link to='/login' className='user_login'>
                                Not a trainer? Click here!
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
            <Loader />
        </>
    )
}

export default TrainerLogIn