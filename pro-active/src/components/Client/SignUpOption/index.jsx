import { Link } from 'react-router-dom'
import './index.scss'

const SignUpOption = () =>
{
    return(
        <>
        <div className='o_main'>
            <div className='o_sub-main'>
                <div className='mainlabel'>
                    <h1>Create Account as:</h1>
                </div>
                
                <Link to='/signup'>
                    <button className='userbtn'>User</button>
                </Link>

                <Link to ='/trainer_signup'>
                    <button className='trainerbtn'>Trainer</button>
                </Link>
            </div>
        </div>
        </>
    )
}

export default SignUpOption