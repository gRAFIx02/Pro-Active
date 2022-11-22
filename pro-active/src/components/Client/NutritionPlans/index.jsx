import './index.scss'
import { Link } from 'react-router-dom'
import React, { useEffect,useState } from "react";
import axios from "axios";

const NutritionPlan = () =>
{
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
          await axios({
            method: 'get',
            url: "http://localhost:5000/nutrition_all_info",
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
       
  
      },[]);
  
    
    return(
        <>
        <h2 className='name_tag'>Nutrition Plans</h2>
            <div className='np_outer_div'>
            {data.map((nutrition) => {
          return (

                <div className='np_inner_div'>
                    <div className='imagefield'>
                        <Link to='/user_homepage/np'>
                            <img src={nutrition.img} alt='' className='explore_images'/>
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

export default NutritionPlan