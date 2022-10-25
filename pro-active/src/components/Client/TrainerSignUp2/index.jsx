import './index.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardUser} from '@fortawesome/free-solid-svg-icons'

const TrainerSignUp2 = () => 
{
    return (
        <>
            <div className='su_main'>
                <div className='su_sub-main'>
                    <form method='POST'>
                        <div className='su_icon'>
                            <div className='su_container-icon'>
                                <FontAwesomeIcon icon={faClipboardUser} color="white" className='su_user' />
                            </div>
                        </div>
                        <h2>Create Account</h2>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div>
                            <label className='su_label'>&nbsp;Age &emsp;&emsp;&emsp;&emsp;&nbsp;:</label>
                            <input type='number' placeholder='Age' className='su_input' />
                        </div>
                        <div>
                            <label className='su_label'>&nbsp;Height&emsp;&emsp;&emsp;&ensp;:</label>
                            <input type='number' placeholder='Height (in cm)' className='su_input' />
                        </div>
                        <div>
                            <label className='su_label'>&nbsp;Weight&emsp;&emsp;&emsp;&ensp;:</label>
                            <input type='number' placeholder='Weight (in kg)' className='su_input' />
                        </div>
                        <div>
                            <label className='su_label'>Expertise &emsp;&emsp;:</label>
                            <select name='expert' id='expert' className='su_select'>
                                <option value={'weighlifting'}>Weighlifting</option>
                                <option value={'calisthenics'}>Calisthenics</option>
                            </select>
                        </div>
                        <div className='tcreate_ac'>
                            <Link to='/trainer_signup'>
                                <button className='back_btn'>Back</button>
                            </Link>
                            <Link to='/trainer_homepage'>
                                <button className='tcreate_btn'>Create Account</button>
                            </Link >
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default TrainerSignUp2