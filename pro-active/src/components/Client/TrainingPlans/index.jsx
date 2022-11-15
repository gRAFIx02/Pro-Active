import './index.scss'
import { Link } from 'react-router-dom'
import workoutDefault from '../../../Assets/images/workout_default.png'

const TrainingPlans = () => 
{
    return (
        <>
            <h2 className='name_tag'>Workout Plans</h2>
            <div className='wp_outer_div'>
                <div className='wp_inner_div'>
                    <div className='imagefield'>
                        <Link to='/user_homepage/wp'>
                            <img src={workoutDefault} alt='' className='explore_images'/>
                        </Link>
                    </div>
                    <div className='textfield'>Default text</div>
                </div>
            </div>
        </>
    )
}

export default TrainingPlans