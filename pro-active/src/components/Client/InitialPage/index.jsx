import './index.scss'
import { Link } from 'react-router-dom'
import HomeLogo from '../HomeLogo'
import Workout from '../../../Assets/images/Workout.png'
import Nutrition from '../../../Assets/images/Nutrition.png'
import Exercise from '../../../Assets/images/Exercise.png'
import Tips from '../../../Assets/images/Tips.png'

const Initial = () => 
{
    return (
        <>
            <HomeLogo />
            <div className='bottom-div'>
                <div className='button-div'>
                    <Link to = '/login'>
                        <button className='log-in'>
                            Log In
                        </button>
                    </Link>
                    <Link to = '/signupoption'>
                        <button className='sign-up'>
                            Sign Up
                        </button>
                    </Link>
                </div>
                <div className='workout'>
                    <img src={Workout} alt='' />
                </div>
                <div className='nutrition'>
                    <img src={Nutrition} alt='' />
                </div>
                <div className='exercise'>
                    <img src={Exercise} alt='' />
                </div>
                <div className='tips'>
                    <img src={Tips} alt='' />
                </div>
                <h1 className='invitation'>Join now and start your fitness journey today!</h1>
                <footer className='copyright'>Pro-Acitve Ⓒ Copyright 2022 Final Flash</footer>
            </div>
        </>
    );
}

export default Initial;