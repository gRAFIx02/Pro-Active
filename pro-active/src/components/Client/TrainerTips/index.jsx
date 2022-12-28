import { Link } from 'react-router-dom'
import './index.scss'
import React, { useEffect, useState } from "react";
import axios from "axios";


const TrainerTips = () =>
{

    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async() => {
          await axios({
            method: 'get',
            url: "http://localhost:5000/MyTips",
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
            <div className='t_tip_back'>
                <div className='t_tips_label'>My Tips</div>
                <Link to='/trainer_homepage/my_tips/add_tips'>
                    <button className='add_tips'>+ Add Tips</button>
                </Link>
                
                {data.map((tips) => {
          return (
       
                <div className='t_tip_box'>{tips.tips}</div>
                
                );
            })}
            </div>
            
        </>
    )
}

export default TrainerTips