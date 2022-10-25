import './index.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardUser} from '@fortawesome/free-solid-svg-icons'

const SignUp2 = () => 
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
                            <label className='su_label'>Goal &emsp;&emsp;&emsp;&emsp;&nbsp;:</label>
                            <select name='goal' id='goal' className='su_select'>
                                <option value={'fat_burn'}>Fat Burn and Lose Weight</option>
                                <option value={'maintain'}>Maintain Current Physique and Weight</option>
                                <option value={'bulk'}>Increase Weight and Muscle Mass</option>
                            </select>
                        </div>
                        <div>
                            <label className='su_label'>Workout Type :</label>
                            <select name='type' id='type' className='su_select'>
                                <option value={'weightlifting'}>Weight-lifting</option>
                                <option value={'calisthenics'}>Calisthenics</option>
                            </select>
                        </div>
                        <div>
                            <label className='su_label'>Current Level :</label>
                            <select name='level' id='level' className='su_select'>
                                <option value={'skinny'}>Skinny</option>
                                <option value={'skinny_fat'}>Skinny Fat</option>
                                <option value={'fat'}>Fat</option>
                                <option value={'avergae'}>Average</option>
                                <option value={'athletic'}>Athletic</option>
                                <option value={'muscular'}>Muscular</option>
                            </select>
                        </div>
                        <div className='create_ac'>
                            <Link to='/user_homepage'>
                                <button className='create_btn'>Create Account</button>
                            </Link >
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp2