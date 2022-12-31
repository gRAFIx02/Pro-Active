import './index.scss'
import React, { useEffect,useState } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom'


const ShowNP = () =>
{
    
    const {nutrition} = useLocation().state;
    console.log(nutrition);

    const plan_per_day = async (e)=> {
       
        try 
        {
          await axios({
            method: 'post',
            url: 'http://localhost:5000/nutritionplansperday',
            withCredentials: 'true',
            data: {
              plan_name : nutrition.plan_name,
              
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
        url: "http://localhost:5000/getnutritionplansperday",
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
            <div className='np_back'>
                <div className='imagefield'>
                    <img src={nutrition.img} alt='exercise' />
                </div>
                <div className='plan_name'>
                    <label>Plan name &emsp; &emsp;: </label>
                    <div className='textfield'>{nutrition.plan_name}</div>
                </div>
                <div className='uploader'>
                    <label>Uploaded By &emsp;: </label>
                    <div className='textfield'>{nutrition.uploaded_by}</div>
                </div>
                <div className='description'>
                    <label>Description :</label>
                    <div>{nutrition.description}</div>
                </div>
                <button className='hide_btn' onLoad={plan_per_day()} >Hide this button</button>

                <div className='add_plan_btn'>
                  <button>Add Plan</button>
                </div>

                <div className='column_names'>
                      <label>Day</label>
                      <label>Breakfast</label>
                      <label>Lunch</label>
                      <label>Snacks</label>
                      <label>Dinner</label>
                </div>

                {/* row 1 */}
                {data.map((workout) => {
          return (
                <div className='row'> 
                      <div className='entry'>{workout.day}</div>
                      <div className='entry'>{workout.breakfast}</div>
                      <div className='entry'>{workout.lunch}</div>
                      <div className='entry'>{workout.snacks}</div>
                      <div className='entry'>{workout.dinner}</div>
                </div>
                );
            })}
            </div>
        </>
    )
}

export default ShowNP