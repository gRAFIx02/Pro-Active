import './index.scss'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyAccount = () => {

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
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
    }


  };

  return (
    <>
      <div className='logout'>
        <button onClick={logOut} className='logout_btn'>
          Log Out
        </button>
      </div>

      <div className='backpage'>

        <div className='profilepic'>
          <img src='' alt='profile_pic' />
        </div>

        <input type='file' className='browse' />
        <button>Upload</button>

        <div>
          {/* Name */}
          <div className='info'>
            <label>Name : </label>
            <div className='textfield'></div>
            <div className='edit'>
              <button>Edit</button>
            </div>
          </div>

          {/* Username */}
          <div className='info'>
            <label>Username : </label>
            <div className='textfield'></div>
          </div>

          {/* Email */}
          <div className='info'>
            <label>Email : </label>
            <div className='textfield'></div>
          </div>

          {/* Age */}
          <div className='info'>
            <label>Age : </label>
            <div className='textfield'></div>
            <div className='edit'>
              <button>Edit</button>
            </div>
          </div>

          {/* Height */}
          <div className='info'>
            <label>Height : </label>
            <div className='textfield'></div>
          </div>

          {/* Weight */}
          <div className='info'>
            <label>Weight : </label>
            <div className='textfield'></div>
            <div className='edit'>
              <button>Edit</button>
            </div>
          </div>

          {/* Focus */}
          <div className='info'>
            <label>Focus : </label>
            <div className='textfield'></div>
            <div className='edit'>
              <button>Edit</button>
            </div>
          </div>

          {/* Type */}
          <div className='info'>
            <label>Type : </label>
            <div className='textfield'></div>
            <div className='edit'>
              <button>Edit</button>
            </div>
          </div>

          {/* Current Level */}
          <div className='info'>
            <label>Current Level : </label>
            <div className='textfield'></div>
            <div className='edit'>
              <button>Edit</button>
            </div>
          </div>
        </div>

        <div className='change'>
          <button>Change Password</button>
        </div>
        <div className='delete'>
          <button>Delete Account</button>
        </div>

      </div>
    </>
  )
}

export default MyAccount