import './index.scss'
import { Link } from 'react-router-dom'

const TrainerNP = () => 
{
    return (
        <>
            <Link to='/trainer_homepage/my_np/add_plan'>
                <div className='add_plan'>
                    <button className='add_plan_btn'>+ Add Plan</button>
                </div>
            </Link>
            <h2 className='t_name_tag'>My Nutrition Plans</h2>
            <div className='np_outer_div'>
                <div className='np_inner_div'>
                    <div className='imagefield'>
                        <Link to='/trainer_homepage/np'>
                            <img src='' alt='Nutrition_Plan' className='explore_images' />
                        </Link>
                    </div>
                    <div className='textfield'></div>
                </div>
            </div>
        </>
    )
}

export default TrainerNP