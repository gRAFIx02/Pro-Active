import './index.scss'
import workoutDefault from '../../../Assets/images/workout_default.png'
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Choice from '../Choice';

const AddPlan = () =>
{

    
    const [planname, setPlanname] = useState("");
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [img, setImg] = useState("");
    const [description, setDescription] = useState("");
      
    const navigate = useNavigate();
    
    const addTrainerPlan = async (e) => {
        e.preventDefault();
        try {
          await axios({
            method: 'post',
            url: "http://localhost:5000/addTrainerPlan",
            withCredentials: 'true',
            data: {
              planname: planname,
              category: category,
              difficulty: difficulty,
              description: description,
              img: img,
             
            },
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          })

          navigate("/trainer_homepage/my_tp");

        } catch (error) {
          console.log(error.response.data);
        }

        
      };


      const checkPlanName = (e) =>{
        setPlanname(e.target.value); 
        console.log(e.target.value);
      }

      
      const checkCategory = (e) =>{
        setCategory(e.target.value); 
        console.log(e.target.value);
      }

      const checkDifficulty = (e) =>{
        setDifficulty(e.target.value);
        console.log(e.target.value); 
      }

      const checkdecription = (e) =>{
        setDescription(e.target.value);
        console.log(e.target.value); 
      }

      
      const checkimg = (e) =>{
        setImg(e.target.value);
      }

    
    

    
    return(
        <>
            <div className='outershell'>
                <form onSubmit={addTrainerPlan}>
                  
                    <div className='container_plan_image'>
                        <img src={workoutDefault} alt='plan_image' className='plan_image'/>
                    </div>

                    <div className='container_button_browse'>
                        <input type='file' onChange={checkimg}/>
                    </div>

                    <div className='plan_name'>
                        <label className='plan_label'>Plan name:</label>
                        <input type='text' placeholder='Enter Workout Plan Name' className='wp_name' required onChange={checkPlanName}/>
                    </div>

                    <div className='description'>
                        <div className='desc'>
                            <label className='desc_label'>Description:</label>
                        </div>
                        <textarea type='text' placeholder='Describe your plan in a few words' className='wp_desc' required onChange={checkdecription} />
                    </div>

                    <div className='catNdif'>
                        <label className='cat_label'>Category: &ensp;</label>
                        <select name='cat' id='cat' className='cat_select' onChange={ checkCategory}>
                            <option value={'weightlifting'}>Weight-lifting</option>
                            <option value={'calisthenics'}>Calisthenics</option>
                        </select>

                        <label className='cat_label'>Difficulty: &ensp;</label>
                        <select name='dif' id='dif' className='cat_select' onChange={checkDifficulty}>
                            <option value={'beginner'}>Beginner</option>
                            <option value={'intermediate'}>Intermediate</option>
                            <option value={'advanced'}>Advanced</option>
                            <option value={'expert'}>Expert</option>
                        </select>
                    </div>

                    <div className='column_names'>
                      <label>Day</label>
                      <label>Workout 1</label>
                      <label>Workout 2</label>
                      <label>Workout 3</label>
                      <label>Workout 4</label>
                    </div>

                    <Choice />
                    <Choice />
                    <Choice />
                    <Choice />
                    <Choice />
                    <Choice />
                    <Choice />

                    <div className='container_button_submit'>
                        <button className='plan_upload'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddPlan