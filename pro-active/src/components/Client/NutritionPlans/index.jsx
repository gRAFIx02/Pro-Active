import './index.scss'
import { Link } from 'react-router-dom'
import nutritionDefault from '../../../Assets/images/nutrition_default.png'

const NutritionPlan = () =>
{
    return(
        <>
        <h2 className='name_tag'>Nutrition Plans</h2>
            <div className='np_outer_div'>
                <div className='np_inner_div'>
                    <div className='imagefield'>
                        <Link to='/user_homepage/np'>
                            <img src={nutritionDefault} alt='' className='explore_images'/>
                        </Link>
                    </div>
                    <div className='textfield'>Default text</div>
                </div>
            </div>
        </>
    )
}

export default NutritionPlan