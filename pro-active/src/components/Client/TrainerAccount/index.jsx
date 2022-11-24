import './index.scss'
import axios from "axios";
import { useNavigate } from "react-router-dom";



const TrainerAccount = () => {
  const navigate = useNavigate();


  const logOut = async (e) => {
    e.preventDefault();
    try {
      await axios({
        method: 'post',
        url: "http://localhost:5000/logout1",
        withCredentials: 'true',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },

      })
      localStorage.removeItem("logged-in-trainer");
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
    }


  };

  return (
    <>
      <div className='logout' >
        <button className='logout_btn' onClick={logOut}>
          Log Out
        </button>
      </div>

      <div className='backpage'>

        <div className='profilepic'>
          <img src='' alt='profile_pic' />
        </div>

        <input type='file' className='browse' />
        <button>Upload</button>

        {/* Name */}
        <div className='info'>
          <label>Name &emsp; &emsp; &emsp; &emsp;&nbsp;: </label>
          <div className='textfield'></div>
          <div className='edit'>
            <button>Edit</button>
          </div>
        </div>

        {/* Username */}
        <div className='info'>
          <label>Username &emsp; &emsp; &ensp; : </label>
          <div className='textfield'></div>
        </div>

        {/* Email */}
        <div className='info'>
          <label>Email &emsp; &emsp; &emsp; &emsp; &ensp;: </label>
          <div className='textfield'></div>
        </div>

        {/* Age */}
        <div className='info'>
          <label>Age &emsp; &emsp; &emsp; &emsp; &emsp; : </label>
          <div className='textfield'></div>
          <div className='edit'>
            <button>Edit</button>
          </div>
        </div>

        {/* Height */}
        <div className='info'>
          <label>Height &emsp; &emsp; &emsp; &emsp; : </label>
          <div className='textfield'></div>
        </div>

        {/* Weight */}
        <div className='info'>
          <label>Weight &emsp; &emsp; &emsp; &emsp;: </label>
          <div className='textfield'></div>
          <div className='edit'>
            <button>Edit</button>
          </div>
        </div>

        {/* Expertise */}
        <div className='info'>
          <label>Expertise &emsp; &emsp; &emsp; : </label>
          <div className='textfield'></div>
        </div>
      </div>

      <div className='change'>
        <button>Change Password</button>
      </div>
      <div className='delete'>
        <button>Delete Account</button>
      </div>
    </>
  )
}

export default TrainerAccount