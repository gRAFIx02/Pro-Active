import './index.scss'

import React, { useEffect,useState } from "react";
import axios from "axios";





const Tips = () =>
{

  
           
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      await axios({
        method: 'get',
        url: "http://localhost:5000/gettipsforuser",
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
            <div className='tip_back'>
                <div className='tips_label'>Tips</div>

                {data.map((trainer) => {
          return (

                <div className='tip_box'>{trainer.username} - {trainer.tips}</div>
                );
            })}
            </div>
        </>
    )
}

export default Tips