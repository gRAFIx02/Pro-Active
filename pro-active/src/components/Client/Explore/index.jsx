import './index.scss'
import BlackBar from '../../../Assets/images/blackbar.png'
import workoutDefault from '../../../Assets/images/workout_default.png'
import nutritionDefault from '../../../Assets/images/nutrition_default.png'
import { Link } from 'react-router-dom'
import React, { useEffect,useState } from "react";
import axios from "axios";


//  ../image/exercise/pushup.jpg


const Explore = () =>
{

    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async() => {
        await axios({
          method: 'get',
          url: "http://localhost:5000/exercise_info",
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


    // setTimeout(function(){
    //     window.location.reload();
    //  }, 5000);

    return(
        <>
      
        {/* Exercise */}

        <h2 className='name_tag'>Exercises</h2>
          
        <div className='outer_div'>   
        
            {/* Exercise 1 */}
            {data.map((exercise) => {
          return (

            <div className='inner_div'>
                <div className='imagefield'>
                    <Link to='/user_homepage/exercise'>
                        <img src={exercise.img} alt='' className='explore_images'/>
                    </Link>
                </div>
                <div className='textfield'>Default text</div>
            </div>  

);
})}


        
        </div>
         
        
        {/* Workout plans */}
        <h2 className='name_tag'>Workout Plans</h2>
        <div className='outer_div'>

            {/* Workout plans 1 */}
            <div className='inner_div'>
                <div className='imagefield'>
                    <Link to='/user_homepage/wp'>
                        <img src={workoutDefault} alt='' className='explore_images'/>
                    </Link>
                </div>
                <div className='textfield'>Default text</div>
            </div>
            

        </div>

        

        

        {/* Nutrition plans */}
        <h2 className='name_tag'>Nutrition Plans</h2>
        <div className='outer_div'>

            {/* Nutrition plans 1*/}
            <div className='inner_div'>
                <div className='imagefield'>
                    <Link to='/user_homepage/np'>
                        <img src={nutritionDefault} alt='' className='explore_images'/>
                    </Link>
                </div>
                <div className='textfield'>Default text</div>
            </div>

        </div>

        <div className='blackbar-container'>
            <img src = {BlackBar} alt='' className='blackbar' />
        </div>

        <footer className='footer'>Pro-Active Ⓒ Copyright 2022 Final Flash</footer>
        </>
    )
}

export default Explore