import './index.scss'
import BlackBar from '../../../Assets/images/blackbar.png'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import axios from "axios";

const TrainerExplore = () => 
{

    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const[data2,setData2]=useState([]);
  
      useEffect(() => {
        const fetchData = async() => {
          await axios({
            method: 'get',
            url: "http://localhost:5000/exercise_info1",
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
       
        
        const fetchData1 = async() => {
          await axios({
            method: 'get',
            url: "http://localhost:5000/nutrition_info1",
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            responseType: 'json',
          }).then((response) => {
            setData1(response.data.data);
            console.log(response.data.data);
          }).catch((err) => {
            console.log(err);
          })
        }
        fetchData1();
  
        const fetchData2 = async() => {
          await axios({
            method: 'get',
            url: "http://localhost:5000/getthreeworkouts1",
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            responseType: 'json',
          }).then((response) => {
            setData2(response.data.data);
            console.log(response.data.data);
          }).catch((err) => {
            console.log(err);
          })
        }
        fetchData2();
     
        
  
  
  
    }, []);
  
  
  
   setTimeout(function () {
     window.location.reload();
   }, 30000);
  

    return (
        <>
            {/* Exercise */}
            <h2 className='name_tag'>Exercises</h2>
            <div className='outer_div'>
            {data.map((exercise) => {
          return (
                <div className='inner_div'>
                    <div className='imagefield'>
                        <Link  state={{exercise}}    
                to={{
                 pathname: "/trainer_homepage/exercise",
                 // your data array of objects
               }}
                        
               >
                            <img src={exercise.img} alt='Exercise Default' className='explore_images' />
                        </Link>
                    </div>
                    <div className='textfield'>{exercise.name}</div>
                </div>
                  );
                })}
            </div>

            {/* Workout plans */}
            <h2 className='name_tag'>Workout Plans</h2>
            <div className='outer_div'>
            {data2.map((workout) => {
          return (
                <div className='inner_div'>
                    <div className='imagefield'>
                    <Link
                state={{workout}}    
                to={{
                 pathname: "/trainer_homepage/tp",
                 // your data array of objects
               }}>
                            <img src={workout.img} alt='Workout Default' className='explore_images' />
                        </Link>
                    </div>
                    <div className='textfield'>{workout.plan_name}</div>
                </div>
                  );
                })}
            </div>


            {/* Nutrition plans */}
            <h2 className='name_tag'>Nutrition Plans</h2>
            <div className='outer_div'>
            {data1.map((nutrition) => {
          return (
                <div className='inner_div'>
                    <div className='imagefield'>
                    <Link
                state={{nutrition}}    
                to={{
                 pathname: "/trainer_homepage/np",
                 // your data array of objects
               }}>
                            <img src={nutrition.img} alt='Nutrition Default' className='explore_images' />
                        </Link>
                    </div>
                    <div className='textfield'>{nutrition.plan_name}</div>
                </div>
                  );
                })}
            </div>

            <div className='t_blackbar-container'>
                <img src={BlackBar} alt='' className='blackbar' />
            </div>

            <footer className='t_footer'>Pro-Active Ⓒ Copyright 2022 Final Flash</footer>
        </>
    )
}

export default TrainerExplore