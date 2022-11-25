import './index.scss'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import axios from "axios";

const TrainerNP = () => 
{

    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async() => {
        await axios({
          method: 'get',
          url: "http://localhost:5000/MyNutritionPlans",
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
            <Link to='/trainer_homepage/my_np/add_plan'>
                <div className='add_plan'>
                    <button className='add_plan_btn'>+ Add Plan</button>
                </div>
            </Link>
            <h2 className='t_name_tag'>My Nutrition Plans</h2>
            <div className='np_outer_div'>
            {data.map((nutrition) => {
          return (
                <div className='np_inner_div'>
                    <div className='imagefield'>
                    <Link
                state={{nutrition}}    
                to={{
                 pathname: "/trainer_homepage/np",
                 // your data array of objects
               }}>
                            <img src={nutrition.img} alt='Nutrition_Plan' className='explore_images' />
                        </Link>
                    </div>
                    <div className='textfield'>{nutrition.plan_name}</div>
                </div>
                  );
                })}
            </div>
        </>
    )
}

export default TrainerNP