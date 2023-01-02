import './index.scss'
import workoutDefault from '../../../Assets/images/workout_default.png'
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AddCustomPlan = () =>
{


     
  const [planname, setPlanname] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");

  
  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");
  const [a3, setA3] = useState("");
  const [a4,setA4] = useState("");
  const [a5, setA5] = useState("");

  
  const [b1, setB1] = useState("");
  const [b2, setB2] = useState("");
  const [b3, setB3] = useState("");
  const [b4,setB4] = useState("");
  const [b5, setB5] = useState("");

  
  const [c1, setC1] = useState("");
  const [c2, setC2] = useState("");
  const [c3, setC3] = useState("");
  const [c4,setC4] = useState("");
  const [c5, setC5] = useState("");

  
  const [d1, setD1] = useState("");
  const [d2, setD2] = useState("");
  const [d3, setD3] = useState("");
  const [d4,setD4] = useState("");
  const [d5, setD5] = useState("");

  
  const [e1, setE1] = useState("");
  const [e2, setE2] = useState("");
  const [e3, setE3] = useState("");
  const [e4,setE4] = useState("");
  const [e5, setE5] = useState("");

  
  const [f1, setF1] = useState("");
  const [f2, setF2] = useState("");
  const [f3, setF3] = useState("");
  const [f4,setF4] = useState("");
  const [f5, setF5] = useState("");

  
  const [g1, setG1] = useState("");
  const [g2, setG2] = useState("");
  const [g3, setG3] = useState("");
  const [g4,setG4] = useState("");
  const [g5, setG5] = useState("");


    
  const navigate = useNavigate();
  
  const addTrainerPlan = async (e) => {
      e.preventDefault();
      try {
        await axios({
          method: 'post',
          url: "http://localhost:5000/addCustomplan",
          withCredentials: 'true',
          data: {
            planname: planname,
            category: category,
            difficulty: difficulty,
            description: description,
            img: img,
            a1: a1,
            a2: a2,
            a3: a3,
            a4: a4,
            a5: a5,
            b1: b1,
            b2: b2,
            b3: b3,
            b4: b4,
            b5: b5,
            c1: c1,
            c2: c2,
            c3: c3,
            c4: c4,
            c5: c5,
            d1: d1,
            d2: d2,
            d3: d3,
            d4: d4,
            d5: d5,
            e1: e1,
            e2: e2,
            e3: e3,
            e4: e4,
            e5: e5,
            f1: f1,
            f2: f2,
            f3: f3,
            f4: f4,
            f5: f5,
            g1: g1,
            g2: g2,
            g3: g3,
            g4: g4,
            g5: g5,
           
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
     
        navigate("/user_homepage/my_plans");

      } catch (error) {
        console.log(error.response.data);
      }

      
    };


    const checkPlanName = (e) =>{
      setPlanname(e.target.value); 
      console.log(e.target.value);
    }

    
    const checkCategory = (e) =>{
      setCategory(e.target.value); 
      console.log(e.target.value);
    }

    const checkDifficulty = (e) =>{
      setDifficulty(e.target.value);
      console.log(e.target.value); 
    }

    const checkdecription = (e) =>{
      setDescription(e.target.value);
      console.log(e.target.value); 
    }

    
    const checkimg = (e) =>{
      setImg(e.target.value);
    }

    const checka1 = (e) =>{
      setA1(e.target.value);
      console.log(e.target.value);
    }

    
    const checka2 = (e) =>{
      setA2(e.target.value);
      console.log(e.target.value);
    } 

    
    const checka3 = (e) =>{
      setA3(e.target.value);
      console.log(e.target.value);
    }

    
    const checka4 = (e) =>{
      setA4(e.target.value);
      console.log(e.target.value);
    }

    
    const checka5 = (e) =>{
      setA5(e.target.value);
      console.log(e.target.value);
    }

    const checkb1 = (e) =>{
      setB1(e.target.value);
      console.log(e.target.value);
    }

    
    const checkb2 = (e) =>{
      setB2(e.target.value);
      console.log(e.target.value);
    } 

    
    const checkb3 = (e) =>{
      setB3(e.target.value);
      console.log(e.target.value);
    }

    
    const checkb4 = (e) =>{
      setB4(e.target.value);
      console.log(e.target.value);
    }

    
    const checkb5 = (e) =>{
      setB5(e.target.value);
      console.log(e.target.value);
    }

    const checkc1 = (e) =>{
      setC1(e.target.value);
      console.log(e.target.value);
    }

    
    const checkc2 = (e) =>{
      setC2(e.target.value);
      console.log(e.target.value);
    } 

    
    const checkc3 = (e) =>{
      setC3(e.target.value);
      console.log(e.target.value);
    }

    
    const checkc4 = (e) =>{
      setC4(e.target.value);
      console.log(e.target.value);
    }

    
    const checkc5 = (e) =>{
      setC5(e.target.value);
      console.log(e.target.value);
    }


    const checkd1 = (e) =>{
      setD1(e.target.value);
      console.log(e.target.value);
    }

    
    const checkd2 = (e) =>{
      setD2(e.target.value);
      console.log(e.target.value);
    } 

    
    const checkd3 = (e) =>{
      setD3(e.target.value);
      console.log(e.target.value);
    }

    
    const checkd4 = (e) =>{
      setD4(e.target.value);
      console.log(e.target.value);
    }

    
    const checkd5 = (e) =>{
      setD5(e.target.value);
      console.log(e.target.value);
    }

    const checke1 = (e) =>{
      setE1(e.target.value);
      console.log(e.target.value);
    }

    
    const checke2 = (e) =>{
      setE2(e.target.value);
      console.log(e.target.value);
    } 

    
    const checke3 = (e) =>{
      setE3(e.target.value);
      console.log(e.target.value);
    }

    
    const checke4 = (e) =>{
      setE4(e.target.value);
      console.log(e.target.value);
    }

    
    const checke5 = (e) =>{
      setE5(e.target.value);
      console.log(e.target.value);
    }

    const checkf1 = (e) =>{
      setF1(e.target.value);
      console.log(e.target.value);
    }

    
    const checkf2 = (e) =>{
      setF2(e.target.value);
      console.log(e.target.value);
    } 

    
    const checkf3 = (e) =>{
      setF3(e.target.value);
      console.log(e.target.value);
    }

    
    const checkf4 = (e) =>{
      setF4(e.target.value);
      console.log(e.target.value);
    }

    
    const checkf5 = (e) =>{
      setF5(e.target.value);
      console.log(e.target.value);
    }


    const checkg1 = (e) =>{
      setG1(e.target.value);
      console.log(e.target.value);
    }

    
    const checkg2 = (e) =>{
      setG2(e.target.value);
      console.log(e.target.value);
    } 

    
    const checkg3 = (e) =>{
      setG3(e.target.value);
      console.log(e.target.value);
    }

    
    const checkg4 = (e) =>{
      setG4(e.target.value);
      console.log(e.target.value);
    }

    
    const checkg5 = (e) =>{
      setG5(e.target.value);
      console.log(e.target.value);
    }







    return(
        <>
        <div className='outershell'>
                <form onSubmit={addTrainerPlan}>
                  
                    <div className='container_plan_image'>
                        <img src={workoutDefault} alt='plan_image' className='plan_image'/>
                    </div>

                    <div className='container_button_browse'>
                        <input type='file' onChange={checkimg}/>
                    </div>

                    <div className='plan_name'>
                        <label className='plan_label'>Plan name:</label>
                        <input type='text' placeholder='Enter Workout Plan Name' className='wp_name' required onChange={checkPlanName}/>
                    </div>

                    <div className='description'>
                        <div className='desc'>
                            <label className='desc_label'>Description:</label>
                        </div>
                        <textarea type='text' placeholder='Describe your plan in a few words' className='wp_desc' required onChange={checkdecription} />
                    </div>

                    <div className='catNdif'>
                        <label className='cat_label'>Category: &ensp;</label>
                        <select name='cat' id='cat' className='cat_select' onChange={ checkCategory}>
                            <option value={'Weight-lifting'}>Weight-lifting</option>
                            <option value={'Calisthenics'}>Calisthenics</option>
                        </select>

                        <label className='cat_label'>Difficulty: &ensp;</label>
                        <select name='dif' id='dif' className='cat_select' onChange={checkDifficulty}>
                            <option value={'Beginner'}>Beginner</option>
                            <option value={'Intermediate'}>Intermediate</option>
                            <option value={'Advanced'}>Advanced</option>
                            <option value={'Expert'}>Expert</option>
                        </select>
                    </div>

                    <div className='column_names'>
                      <label>Day</label>
                      <label>Workout 1</label>
                      <label>Workout 2</label>
                      <label>Workout 3</label>
                      <label>Workout 4</label>
                    </div>

                    {/* row 1 */}
                    <div className='row'> 
                      <input type='number' placeholder='Choose day' className='day' onChange={checka1}/>
                      <input type='text' placeholder='Choose exercise' onChange={checka2}/>
                      <input type='text' placeholder='Choose exercise' onChange={checka3}/>
                      <input type='text' placeholder='Choose exercise' onChange={checka4}/>
                      <input type='text' placeholder='Choose exercise' onChange={checka5}/>
                    </div>

                    {/* row 2 */}
                    <div className='row'> 
                      <input type='number' placeholder='Choose day' className='day' onChange={checkb1}/>
                      <input type='text' placeholder='Choose exercise' onChange={checkb2} />
                      <input type='text' placeholder='Choose exercise' onChange={checkb3}/>
                      <input type='text' placeholder='Choose exercise'onChange={checkb4} />
                      <input type='text' placeholder='Choose exercise' onChange={checkb5}/>
                    </div>

                    {/* row 3 */}
                    <div className='row'> 
                      <input type='number' placeholder='Choose day' className='day'onChange={checkc1}/>
                      <input type='text' placeholder='Choose exercise' onChange={checkc2}/>
                      <input type='text' placeholder='Choose exercise' onChange={checkc3}/>
                      <input type='text' placeholder='Choose exercise' onChange={checkc4}/>
                      <input type='text' placeholder='Choose exercise' onChange={checkc5}/>
                    </div>

                    {/* row 4 */}
                    <div className='row'> 
                      <input type='number' placeholder='Choose day' className='day' onChange={checkd1}/>
                      <input type='text' placeholder='Choose exercise' onChange={checkd2}/>
                      <input type='text' placeholder='Choose exercise' onChange={checkd3}/>
                      <input type='text' placeholder='Choose exercise' onChange={checkd4}/>
                      <input type='text' placeholder='Choose exercise' onChange={checkd5}/>
                    </div>

                    {/* row 5 */}
                    <div className='row'> 
                      <input type='number' placeholder='Choose day' className='day'onChange={checke1}/>
                      <input type='text' placeholder='Choose exercise' onChange={checke2}/>
                      <input type='text' placeholder='Choose exercise' onChange={checke3}/>
                      <input type='text' placeholder='Choose exercise' onChange={checke4}/>
                      <input type='text' placeholder='Choose exercise' onChange={checke5}/>
                    </div>

                    {/* row 6 */}
                    <div className='row'> 
                      <input type='number' placeholder='Choose day' className='day' onChange={checkf1}/>
                      <input type='text' placeholder='Choose exercise' onChange={checkf2}/>
                      <input type='text' placeholder='Choose exercise' onChange={checkf3}/>
                      <input type='text' placeholder='Choose exercise' onChange={checkf4}/>
                      <input type='text' placeholder='Choose exercise' onChange={checkf5}/>
                    </div>

                    {/* row 7 */}
                    <div className='row'> 
                      <input type='number' placeholder='Choose day' className='day'onChange={checkg1}/>
                      <input type='text' placeholder='Choose exercise' onChange={checkg2}/>
                      <input type='text' placeholder='Choose exercise' onChange={checkg3}/>
                      <input type='text' placeholder='Choose exercise' onChange={checkg4}/>
                      <input type='text' placeholder='Choose exercise' onChange={checkg5}/>
                    </div>

                    <div className='container_button_submit'>
                        <button className='plan_upload'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddCustomPlan