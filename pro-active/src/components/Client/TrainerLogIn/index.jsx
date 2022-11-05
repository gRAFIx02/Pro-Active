import './index.scss'
import Loader from '../Loader'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'

const TrainerLogIn = () => 
{
    return (
        <>
            <div className='main'>
                <div className='sub-main'>
                    <form method='POST'>
                        <div className='t_icon'>
                            <div className='t_container-icon'>
                                <FontAwesomeIcon icon={faUser} color="white" className='t_user' />
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
                        <p>
                            &emsp; &emsp;
                            <Link to='/forgot_password'>
                                Forgot password?
                            </Link> &emsp; &emsp; &emsp; &emsp; &emsp;
                            <Link to='/trainer_signup'>
                                New here? Register now!
                            </Link>
                            <br></br>
                            <br></br>
                            <Link to='/login' className='user_login'>
                                Not a trainer? Click here!
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
            <Loader />
        </>
    )
}

export default TrainerLogIn