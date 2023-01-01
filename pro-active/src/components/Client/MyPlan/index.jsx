import { Link } from 'react-router-dom'
import './index.scss'

import React, { useEffect, useState } from "react";
import axios from "axios";






const MyPlan = () =>
{

    
const [data, setData] = useState([]);
const [data1, setData1] = useState([]);


  useEffect(() => {
    const fetchData = async() => {
      await axios({
        method: 'get',
        url: "http://localhost:5000/selected_exercise_info",
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
        url: "http://localhost:5000/selected_nutrition_info",
        withCredentials: 'true',
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

 
    



}, []);




    return(
        <>
        <div className='plan_out'>
            <div className='my_label'><h3>My Plans</h3></div>
            <div className='custom_plan_btn'>
                <Link to='/user_homepage/my_plans/create_custom_plan'>
                    <button>+Create Custom Plan</button>
                </Link>
            </div>

           

            <div className='current_plan'>
                
                <h3>Current Training Plan</h3>
            </div>


            <div>

            {data.map((workout) => {
          return (
            
         
            <div className='current_tp'>

    
          
                <div className='current_plan_imagefield'>
                <Link   
                state={{workout}}    
                to={{
                 pathname: "/user_homepage/tp",
                 // your data array of objects
               }}>
               
                    <img src={workout.img} alt='Current workout plan' className='current_plan_image'/>  

                      </Link>             
                </div>
                <div className='current_plan_textfield'>{workout.plan_name}</div>

          </div>

);
})}

          </div>

          

            <div className='current_plan'>
                <h3>Current Nutrition Plan</h3>
            </div>

            <div>

            {data1.map((nutrition) => {
          return (

           
            <div className='current_tp'>
                <div className='current_plan_imagefield'>

                <Link 
                state={{nutrition}}    
                to={{
                 pathname: "/user_homepage/np",
                 // your data array of objects
               }}>

                    <img src={nutrition.img} alt='Current nutrition plan' className='current_plan_image'/>

                    </Link>
                </div>
                <div className='current_plan_textfield'>{nutrition.plan_name}</div>
            </div>


);
})}
            </div>

           

            <div className='current_plan'>
                <h3>My Custom Plans</h3>
            </div>

            <div className='custom_plan'>
                <div className='current_tp'>
                    <div className='current_plan_imagefield'>
                        <img src='' alt='My Plans' className='current_plan_image'/>
                    </div>
                    <div className='current_plan_textfield'>Plan name</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default MyPlan