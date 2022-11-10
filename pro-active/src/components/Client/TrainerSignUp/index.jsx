import './index.scss'
import Loader from '../Loader'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardUser } from '@fortawesome/free-solid-svg-icons'

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TrainerSignUp = () => 
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
    const [age, setAge] = useState("");
    const [validAge, setvalidAge] = useState('');
    const [height, setHeight] = useState("");
    const [validHeight, setvalidHeight] = useState('');
    const [weight, setWeight] = useState("");
    const [validWeight, setvalidWeight] = useState('');
    const [expertise,setExpertise]=useState("")
    const [validExpertise,setvalidExpertise]=useState("")
      
 
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const addTrainer = async (e) => {
        e.preventDefault();
        try {
          await axios({
            method: 'post',
            url: "http://localhost:5000/trainer_register",

            data: {
              name: name,
              username: username,
              email: email,
              password: password,
              confPassword: confPassword,
              age: age,
              height: height,
              weight: weight,
              expertise :expertise,
            },
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          })
          console.log(name)
          navigate("/trainer_login");
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

      const checkage = (e) =>{
        setAge(e.target.value);
        if(age.length===0) {
          setvalidName('Please enter your age')
        } else {
          setvalidAge('');
          return true;
        }
      }

      const checkheight = (e) =>{
        setHeight(e.target.value);
        if(height.length===0) {
          setvalidHeight('Please enter your height')
        } else {
          setvalidHeight('');
          return true;
        }
      }


      const checkweight = (e) =>{
        setWeight(e.target.value);
        if(weight.length===0) {
          setvalidWeight('Please enter your weight')
        } else {
          setvalidWeight('');
          return true;
        }
      }

      const checkExpertise =(e) =>{
        setExpertise(e.target.value);
        if(expertise.length===0){
          setvalidExpertise('Please select your expertise')
         }else{
            setvalidExpertise('');
            return true; 
         }

      }

  



    return (
        <>
            <div className='s_main'>
                <div className='s_sub-main'>
                    <form onSubmit={addTrainer}>
                        <div className='s_icon'>
                            <div className='s_container-icon'>
                                <FontAwesomeIcon icon={faClipboardUser} color="white" className='s_user' />
                            </div>
                        </div>
                        <h2>Create Account</h2>
                        <br></br>
                        <div>
                            <label className='s_label'>Name&emsp;&emsp;&emsp; : </label>
                            <input 
                            type='text'
                            placeholder='Your name here'
                            className='s_input' 
                            value={name}
                            onChange={checkname}
                              />     
                            <p className='message'>{validName}</p>
                        </div>
                        <div>
                            <label className='s_label'>Username&emsp; : </label>
                            <input 
                             type='text' 
                             className='s_input' 
                             placeholder='Give a unique username'
                             value={username}
                             onChange={checkusername} 
                             />
                               <p className='message'>{validuserName}</p>
                        </div>
                        <div>
                            <label className='s_label'>Email&emsp; &emsp; &ensp; : </label>
                            <input 
                            type='email' 
                            placeholder='example@gmail.com' 
                            className='s_input'
                            value={email}
                            autoComplete="off"
                            onChange={checkEmail}

                             />
                             <p className='message'>{validMail}</p>
                        </div>
                        <div>
                            <label className='s_label'>Password &emsp;&ensp; : </label>
                            <input 
                            type='password'
                            placeholder='Password'
                            className='s_input'
                            auto autoComplete='off'
                            value={password}
                            onChange={checkPass}
                               />
                                  <p className='message'>{validPass}</p>
                        </div>
                        <div>
                            <label className='s_label'>&nbsp;Re-type &emsp;&emsp; : </label>
                            <input 
                            type='password' 
                            placeholder='Confirm Password'
                            className='s_input'
                            value={confPassword}
                            onChange={checkConfirmPass}
                              />
                                 <p className='message'>{msg}</p>
                        </div>
                        <div>
                            <label className='su_label'>&nbsp;Age &emsp;&emsp;&emsp;&emsp;&nbsp;:</label>
                            <input 
                            type='number' 
                            placeholder='Age' 
                            className='su_input'
                            value={age}
                            onChange={checkage}
                             />
                        </div>
                        <div>
                            <label className='su_label'>&nbsp;Height&emsp;&emsp;&emsp;&ensp;:</label>
                            <input
                             type='number'
                              placeholder='Height (in cm)' 
                              className='su_input' 
                              value={height}
                              onChange={checkheight}
                              />
                        </div>
                        <div>
                            <label className='su_label'>&nbsp;Weight&emsp;&emsp;&emsp;&ensp;:</label>
                            <input 
                            type='number' 
                            placeholder='Weight (in kg)' 
                            className='su_input'
                            value={weight}
                            onChange={checkweight}
                         
                            />
                        </div>
                        <div>
                            <label className='su_label'>Expertise &emsp;&emsp;:</label>
                            <select name='expert' id='expert' className='su_select' value={expertise} onChange={checkExpertise}>
                                <option value={'weighlifting'}>Weighlifting</option>
                                <option value={'calisthenics'}>Calisthenics</option>
                            </select>
                        </div>
                        <div className='tcreate_ac'>
                                <button className='tcreate_btn'>Create Account</button>
                          </div>
                        <div className='link'>
                            <Link to='/trainer_login'>
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

export default TrainerSignUp