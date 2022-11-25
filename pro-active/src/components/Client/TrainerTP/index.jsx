import './index.scss'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import axios from "axios";

const TrainerTP = () => 
{

    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async() => {
        await axios({
          method: 'get',
          url: "http://localhost:5000/MytrainingPlans",
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
            <Link to = '/trainer_homepage/my_tp/add_plan'>
                <div className='add_plan'>
                    <button className='add_plan_btn'>+ Add Plan</button>
                </div>
            </Link>
            <h2 className='t_name_tag'>My Workout Plans</h2>
            <div className='wp_outer_div'>
            {data.map((workout) => {
          return (

                <div className='wp_inner_div'>
                    <div className='imagefield'>
                    <Link
                state={{workout}}    
                to={{
                 pathname: "/trainer_homepage/tp",
                 // your data array of objects
               }}>
                            <img src={workout.img} alt='' className='explore_images' />
                        </Link>
                    </div>
                    <div className='textfield'>{workout.plan_name}</div>
                </div>
                 );
                })}
            
            </div>
            
        </>
    )
}

export default TrainerTP