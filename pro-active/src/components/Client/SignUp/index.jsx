import './index.scss'
import Loader from '../Loader'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardUser} from '@fortawesome/free-solid-svg-icons'

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () =>
{

    const [name, setName] = useState("");
    const [validName, setvalidName] = useState('');
    const [username, setuserName] = useState("");
    const [validuserName, setvaliduserName] = useState('');
    const [email, setEmail] = useState("");
    const [validMail, setvalidMail] = useState('');
    const [password, setPassword] = useState("");
    const [validPass, setvalidPass] = useState('');
    const [confPassword, setConfPassword] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();


    const addUser = async (e) => {
        e.preventDefault();
        try {
          await axios({
            method: 'post',
            url: "http://localhost:5000/register",
            data: {
              name: name,
              username: username,
              email: email,
              password: password,
              confPassword: confPassword,
            },
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          })
          console.log(name)
          navigate("/signup2");
        } catch (error) {
          console.log(error.response.data);
          setvalidName('Username already exists!');
        }
      };

    const checkname = (e) =>{
        setName(e.target.value);
        if(name.length===0) {
          setvalidName('Please enter a name')
        } else {
          setvalidName('');
          return true;
        }
      }

      const checkusername = (e) =>{
        setuserName(e.target.value);
        if(username.length===0) {
          setvaliduserName('Please enter a username')
        } else {
          setvaliduserName('');
          return true;
        }
      }

      const regex = /\S+@\S+\.\S+/;
      const checkEmail = (e) =>{
        setEmail(e.target.value);
        if(regex.test(email)===false) {
          setvalidMail('Please enter valid Email')
        } else {
          setvalidMail('');
          return true;
        }
      }

      const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


      const checkPass = (e) =>{
        e.preventDefault();
        setPassword(e.target.value);
        if(e.target.value === confPassword){
          setMsg("");
        } else{
          setMsg('Passwords do not match!');
        }
        if(passRegex.test(password)){
          setvalidPass('Please enter a valid password!');
        } else{
          setvalidPass('');
          return true;
        }
      }

      const checkConfirmPass = (e) => {
        setConfPassword(e.target.value);
        if(e.target.value===password) {
          setMsg('');
        } else {
          setMsg('Passwords do not match');
          return true;
        }
      }
    
  
    return(
        <>
            <div className='s_main'>
                <div className='s_sub-main'>
                    <form onSubmit={addUser} >
                        <div className='s_icon'>
                            <div className='s_container-icon'>
                                <FontAwesomeIcon icon = {faClipboardUser} color = "white" className='s_user'/>
                            </div>
                        </div>
                        <h2>Create Account</h2>
                        <br></br>
                        <div>
                            <label className='s_label'>Name &emsp;&emsp;: </label>
                            <input 
                            type = 'text' 
                            placeholder='Your name here' 
                            className='s_input'
                            value={name}
                            onChange={checkname}
                             />
                             <p className='message'>{validName}</p>
                        </div>
                        <div>
                            <label className='s_label'>Username : </label>
                            <input type = 'text'
                             placeholder='Give a unique username'
                            className='s_input'
                            value={username}
                            onChange={checkusername} 
                              />
                              <p className='message'>{validuserName}</p>
                        </div>
                        <div>
                            <label className='s_label'>Email &emsp; &ensp; : </label>
                            <input type = 'email'
                             placeholder='example@gmail.com' 
                             className='s_input' 
                             value={email}
                             autoComplete="off"
                             onChange={checkEmail}
                             />
                             <p className='message'>{validMail}</p>
                        </div>
                        <div>
                            <label className='s_label'>Password &ensp;: </label>
                            <input 
                            type = 'password'
                             placeholder='Password'
                            className='s_input'
                            auto autoComplete='off'
                            value={password}
                            onChange={checkPass}

                             />
                             <p className='message'>{validPass}</p>
                        </div>
                        <div>
                            <label className='s_label'>Re-type &emsp;: </label>
                            <input
                             type = 'password' 
                             placeholder='Confirm Password' 
                             className='s_input'
                             value={confPassword}
                             onChange={checkConfirmPass}

                              />
                              <p className='message'>{msg}</p>
                        </div>
                        <div className='next'>
                         
                            <button className='next_btn'>Next</button>
                            
                        </div>
                        <div className='link'>
                            <Link to = '/login'>
                                Already have an account? Log In!
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            <Loader />
        </>
    )
}

export default SignUp