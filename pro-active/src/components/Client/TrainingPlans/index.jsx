import './index.scss'
import { Link } from 'react-router-dom'

import React, { useEffect, useState } from "react";
import axios from "axios";



const TrainingPlans = () => 
{

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
          await axios({
            method: 'get',
            url: "http://localhost:5000/getallworkout",
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
  

   
    return (
        <>
            <h2 className='name_tag'>Workout Plans</h2>
            <div className='wp_outer_div'>

            {data.map((w) => {
          return (
 
                <div className='wp_inner_div'>
                    <div className='imagefield'>
                        <Link to='/user_homepage/wp'>
                            <img src={w.img} alt='' className='explore_images'/>
                        </Link>
                    </div>
                    <div className='textfield'>{w.name}</div>
                </div>
                );
            })}
            </div>
        </>
    )
}

export default TrainingPlans