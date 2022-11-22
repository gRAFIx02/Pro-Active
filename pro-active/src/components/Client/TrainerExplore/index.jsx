import './index.scss'
import BlackBar from '../../../Assets/images/blackbar.png'
import workoutDefault from '../../../Assets/images/workout_default.png'
import exerciseDefault from '../../../Assets/images/exercise_default.png'
import nutritionDefault from '../../../Assets/images/nutrition_default.png'
import { Link } from 'react-router-dom'

const TrainerExplore = () => 
{
    return (
        <>
            {/* Exercise */}
            <h2 className='name_tag'>Exercises</h2>
            <div className='outer_div'>
                <div className='inner_div'>
                    <div className='imagefield'>
                        <Link to='/trainer_homepage/exercise'>
                            <img src={exerciseDefault} alt='Exercise Default' className='explore_images' />
                        </Link>
                    </div>
                    <div className='textfield'>Default text</div>
                </div>
            </div>

            {/* Workout plans */}
            <h2 className='name_tag'>Workout Plans</h2>
            <div className='outer_div'>
                <div className='inner_div'>
                    <div className='imagefield'>
                        <Link to='/trainer_homepage/wp'>
                            <img src={workoutDefault} alt='Workout Default' className='explore_images' />
                        </Link>
                    </div>
                    <div className='textfield'>Default text</div>
                </div>
            </div>


            {/* Nutrition plans */}
            <h2 className='name_tag'>Nutrition Plans</h2>
            <div className='outer_div'>
                <div className='inner_div'>
                    <div className='imagefield'>
                        <Link to='/trainer_homepage/np'>
                            <img src={nutritionDefault} alt='Nutrition Default' className='explore_images' />
                        </Link>
                    </div>
                    <div className='textfield'>Default text</div>
                </div>
            </div>

            <div className='t_blackbar-container'>
                <img src={BlackBar} alt='' className='blackbar' />
            </div>

            <footer className='t_footer'>Pro-Active Ⓒ Copyright 2022 Final Flash</footer>
        </>
    )
}

export default TrainerExplore