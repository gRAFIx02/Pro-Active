import './index.scss'
import Loader from '../Loader'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardUser } from '@fortawesome/free-solid-svg-icons'

const TrainerSignUp = () => 
{
    return (
        <>
            <div className='s_main'>
                <div className='s_sub-main'>
                    <form method='POST'>
                        <div className='s_icon'>
                            <div className='s_container-icon'>
                                <FontAwesomeIcon icon={faClipboardUser} color="white" className='s_user' />
                            </div>
                        </div>
                        <h2>Create Account</h2>
                        <br></br>
                        <div>
                            <label className='s_label'>First Name:</label>
                            <input type='text' placeholder='First Name' className='s_input' />
                        </div>
                        <div>
                            <label className='s_label'>Last Name :</label>
                            <input type='text' placeholder='Last Name' className='s_input' />
                        </div>
                        <div>
                            <label className='s_label'>Email &emsp; &ensp; : </label>
                            <input type='email' placeholder='example@gmail.com' className='s_input' />
                        </div>
                        <div>
                            <label className='s_label'>Password &ensp;: </label>
                            <input type='password' placeholder='Password' className='s_input' />
                        </div>
                        <div>
                            <label className='s_label'>Re-type &emsp;: </label>
                            <input type='password' placeholder='Confirm Password' className='s_input' />
                        </div>
                        <div className='next'>
                            <Link to='/trainer_signup2'>
                                <button className='next_btn'>Next</button>
                            </Link >
                        </div>
                        <div className='link'>
                            <Link to='/trainer_login'>
                                Already have an account? Log In!
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            <Loader />
        </>
    )
}

export default TrainerSignUp