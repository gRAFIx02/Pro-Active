import './index.scss'
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const ChangePassT = () =>
{


    const [password, setPassword] = useState("");
    const [validPass, setvalidPass] = useState('');
    const [confPassword, setConfPassword] = useState("");

    const [msg, setMsg] = useState("");

    const [passbool, setBoolpass] = useState(false);

    const navigate = useNavigate();


    
    const changepass = async (e) => {
        e.preventDefault();
        try {
          await axios({
            method: 'post',
            url: "http://localhost:5000/changetrainerpass",
            withCredentials: 'true',
            data: {
              password: password,
              confPassword: confPassword,
              
            },
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          })
          navigate("/trainer_login");
        } catch (error) {
          console.log(error.response.data);
          
        }

        
      };



    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    const checkPass = (e) =>{
      e.preventDefault();

     

      setPassword(e.target.value);

      

      if(e.target.value === confPassword){
        setMsg("");
      } 
      else{
        setMsg('Passwords do not match!');
      }

      const temp=e.target.value;
       console.log(temp.length);
      if(temp.length<6){
       
        setvalidPass('Password must be atleast 7 characters long');

      } else if(temp.length>6){
        setvalidPass('');
        setBoolpass(true);
        
      }
    }

    const checkConfirmPass = (e) => {
      setConfPassword(e.target.value);
      if(e.target.value===password) { 
        
        setBoolpass(true);
        setMsg('');
      } else {
        setBoolpass(false);
        setMsg('Passwords do not match');
       
      }

    }


    return(
        <>
        <div className='out_pas'>
            <h3>Change your password</h3>
             <p>{msg}</p>
             <p>{validPass}</p>
            <div className='pas'>
                <label className='new'>New Password</label>
                <input type='password' onChange={checkPass} placeholder='Enter new password' />
            </div>
            <div className='pas'>
                <label className='confirm'>Confirm Password</label>
                <input type='password' onChange={ checkConfirmPass} placeholder='Re-type the password' />
            </div>
            <div className='submit_btn'>
                <button onClick={changepass}>Submit</button>
            </div>
        </div>
        </>
    )
}

export default ChangePassT