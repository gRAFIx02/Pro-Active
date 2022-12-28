import './index.scss'
import { useLocation } from 'react-router-dom'
import React, { useEffect,useState } from "react";
import axios from "axios";
import { faSpaghettiMonsterFlying } from '@fortawesome/free-solid-svg-icons';


const ShowTP = () =>
{
    const {workout} = useLocation().state;
    console.log(workout);
   

    const plan_per_day = async (e)=> {
       
        try 
        {
          await axios({
            method: 'post',
            url: 'http://localhost:5000/plansperday',
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
        url: "http://localhost:5000/getplansperday",
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

const [msg, setMsg] = useState("");

    const checkmsg =(e)=>{
        
      setMsg(e);

    }

     
    const addthisplan = async (e) => {
      e.preventDefault();
      try {
        await axios({
          method: 'post',
          url: "http://localhost:5000/addthisplan",
          withCredentials: 'true',
          data: {
            trainername : workout.uploaded_by,
            trainerplanname : workout.plan_name,
            
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
       
        checkmsg("Succesfully added")

      
      } catch (error) {
        console.log(error.response.data);
        checkmsg("This plan is already added");
      }

      
    };


  


    

    return(
        <>
              
            <div className='tp_back'>
            <p className='message'>{msg}</p>

                <div className='imagefield'>
               
                    <img src={workout.img} alt='exercise' />
                </div>
                <div className='plan_name'>
                    <label>Plan name &emsp; &emsp;: </label>
                    <div className='textfield'>{workout.plan_name}</div>
                </div>
                <div className='uploader'>
                    <label>Uploaded By &emsp;: </label>
                    <div className='textfield'>{workout.uploaded_by}</div>
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
                    <div>{workout.description}</div>
                </div>
                <div className='change'>
          <button onLoad={plan_per_day()  } >Hide this plan</button>
          
         
        </div>
                <div className='column_names'>
                      <label>Day</label>
                      <label>Workout 1</label>
                      <label>Workout 2</label>
                      <label>Workout 3</label>
                      <label>Workout 4</label>
                </div>

                {/* row 1 */}
                
            <button onClick={addthisplan}   >Add Plan</button>

                {data.map((workout) => {
          return (
       

                <div className='row'> 
                      <div className='entry'>{workout.day}</div>
                      <div className='entry'>{workout.workout_1}</div>
                      <div className='entry'>{workout.workout_2}</div>
                      <div className='entry'>{workout.workout_3}</div>
                      <div className='entry'>{workout.workout_4}</div>
                </div>
                );
              })}
            </div>

        </>
    )
}

export default ShowTP