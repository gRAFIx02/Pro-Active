import './index.scss'


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const AddTips = () => 
{


    const [desc, setDesc] = useState("");
    const navigate = useNavigate();

    const addtips = async (e) => {
        e.preventDefault();
        try {
          await axios({
            method: 'post',
            url: "http://localhost:5000/addtips",
            withCredentials: 'true',
            data: {
              desc: desc,  
              
            },
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          })
         
          navigate("/trainer_homepage/my_tips");


        } catch (error) {
          console.log(error.response.data);
       
        }

        
      };

      const checkdesc = (e) =>{
        setDesc(e.target.value);
        console.log(e.target.value);
      }
    



    return (
        <>
            <div className='out'>
                <form  onSubmit={addtips}>
                    <div className='write_tip'>
                        <label>Write your tips about exercise/nutrition :</label>
                    </div>
                    <div className='desc_tip'>
                        <textarea  type='text' placeholder='Write your tip here' 
                         onChange={checkdesc}
                        />
                    </div>

                    <div className='tip_submit'>
                        <button>Submit</button>
                    </div>


                </form>
            </div>
        </>
    )
}

export default AddTips