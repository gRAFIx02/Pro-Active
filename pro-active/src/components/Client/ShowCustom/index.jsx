import './index.scss'
import { useLocation } from 'react-router-dom'
import React, { useEffect,useState } from "react";
import axios from "axios";

const ShowCustom = () =>
{


    const {workout} = useLocation().state;
    console.log(workout);
   

    const plan_per_day = async (e)=> {
       
        try 
        {
          await axios({
            method: 'post',
            url: 'http://localhost:5000/customplansperday',
            withCredentials: 'true',
            data: {
              plan_name : workout.plan_name,
              
            },
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          })
          .then((response) =>
          {
              console.log(response);
              console.log("hello")
          });


        } catch (error) {
          if (error.response) {
            console.log("ehe");
          }
        }
      }; 


      
  const [data, setData] = useState([]);
  

  useEffect(() => {
    const fetchData = async() => {
      await axios({
        method: 'get',
        url: "http://localhost:5000/customgetplansperday",
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
    
    return(
        <>
        <div className='cp_back'>
                <div className='imagefield'>
               
                <img src={workout.img} alt='exercise' />
                </div>
                <div className='plan_name'>
                    <label>Plan name &emsp; &emsp;: </label>
                    <div className='textfield'>{workout.plan_name}</div>
                </div>
                <div className='difficulty'>
                    <label>Difficulty &emsp; &ensp; : </label>
                    <div className='textfield'>{workout.difficulty}</div>
                </div>
                <div className='catNdiff'>
                    <label>Category &emsp; &emsp; : </label>
                    <div className='textfield'>{workout.category}</div>
                </div>
                <div className='description'>
                    <label>Description :</label>
                    <div>{workout.desc}</div>
                </div>
                <button className='hide_btn' onLoad={plan_per_day()}>Hide this plan</button> 

                <div className='column_names'>
                      <label>Day</label>
                      <label>Workout 1</label>
                      <label>Workout 2</label>
                      <label>Workout 3</label>
                      <label>Workout 4</label>
                </div>

                {/* row 1 */}  

                {data.map((workout1) => {
          return (
       

                <div className='row'> 
                      <div className='entry'>{workout1.day}</div>
                      <div className='entry'>{workout1.workout_1}</div>
                      <div className='entry'>{workout1.workout_2}</div>
                      <div className='entry'>{workout1.workout_3}</div>
                      <div className='entry'>{workout1.workout_4}</div>
                </div>

);
})}
            </div>
        </>
    )
}

export default ShowCustom