import './index.scss'
import axios from "axios";
import {useNavigate } from "react-router-dom";



const TrainerAccount =() =>
{
    const navigate = useNavigate();

    
    const logOut = async (e) => {
        e.preventDefault();
        try {
          await axios({
            method: 'post',
            url: "http://localhost:5000/logout",
            withCredentials: 'true',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            
          })
          localStorage.removeItem("logged-in-user");
          navigate("/trainer_login");
        } catch (error) {
          console.log(error.response.data);     
        }

        
      };

    return(
        <>
            <div className='logout' >
                <button className='logout_btn' onClick={logOut}>
                    Log Out
                </button>
            </div>
        </>
    )
}

export default TrainerAccount