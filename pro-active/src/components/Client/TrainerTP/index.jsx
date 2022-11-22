import './index.scss'
import { Link } from 'react-router-dom'
import workoutDefault from '../../../Assets/images/workout_default.png'

const TrainerTP = () => 
{
    return (
        <>
            <Link to = '/trainer_homepage/my_tp/add_plan'>
                <div className='add_plan'>
                    <button className='add_plan_btn'>+ Add Plan</button>
                </div>
            </Link>
            <h2 className='t_name_tag'>My Workout Plans</h2>
            <div className='wp_outer_div'>
                <div className='wp_inner_div'>
                    <div className='imagefield'>
                        <Link to='/user_homepage/wp'>
                            <img src={workoutDefault} alt='' className='explore_images' />
                        </Link>
                    </div>
                    <div className='textfield'>Default text</div>
                </div>
            </div>
        </>
    )
}

export default TrainerTP