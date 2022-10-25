import './index.scss'
import Loader from '../Loader'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

const LogIn = () => 
{
    return (
        <>
            <div className='main'>
                <div className='sub-main'>
                    <form method='POST'>
                        <div className='icon'>
                            <div className='container-icon'>
                                <FontAwesomeIcon icon={faUser} color="white" className='user' />
                            </div>
                        </div>
                        <div className='username'>
                            <h3 className='label_user'>Email or username:</h3>
                            <FontAwesomeIcon icon={faEnvelope} color="black" className='in_icon' />
                            <input type='text' placeholder='E-mail or username' className='log_input' />
                        </div>
                        <div className='password_div'>
                            <h3 className='label_password'>Password:</h3>
                            <FontAwesomeIcon icon={faKey} color="black" className='in_icon' />
                            <input type='password' placeholder='Password' className='log_input' />
                        </div>
                        <div className='login_div'>
                            <Link to='/user_homepage'>
                                <button className='btn'>Log In</button>
                            </Link >
                        </div>
                        <h3>OR</h3>
                        <div className='google_div'>
                            <Link to='/google_log_in'>
                                <button className='btn'>
                                    <FontAwesomeIcon icon={faGoogle} color='azure' className='google' />
                                </button>
                            </Link>
                        </div>
                        <p>
                            &emsp; &emsp;
                            <Link to='/forgot_password'>
                                Forgot password?
                            </Link> &emsp; &emsp; &emsp; &emsp; &emsp;
                            <Link to='/signup'>
                                New here? Register now!
                            </Link>
                            <br></br>
                            <br></br>
                            <Link to='/trainer_login' className='trainer'>
                                Are you a trainer? Click here!
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
            <Loader />
        </>
    )
}

export default LogIn