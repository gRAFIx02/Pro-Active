import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss'

const SearchResult = () =>
{
    const [data, setData] = useState([]);
  
      useEffect(() => {
        const fetchData = async() => {
          await axios({
            method: 'get',
            url: "http://localhost:5000/exercise_info",
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
        <div className='search_back'>
            {data.map((exercise)=>
            {
                return(
                    <div className='exercise_container'>
                        <div className='imagefield'>
                        <Link state={{exercise}} to={{pathname: "/user_homepage/exercise",}}>
                            <img src={exercise.img} alt='exercise' className='explore_image'/>
                        </Link>
                        </div>
                        <div className='textfield'>{exercise.name}</div>
                    </div>
                );
            })}
        </div>
        </>
    )
}

export default SearchResult