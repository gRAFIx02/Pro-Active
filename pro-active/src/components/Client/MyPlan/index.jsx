import { Link } from 'react-router-dom'
import './index.scss'

const MyPlan = () =>
{
    return(
        <>
        <div className='plan_out'>
            <div className='my_label'><h3>My Plans</h3></div>
            <div className='custom_plan_btn'>
                <Link to='/user_homepage/my_plans/create_custom_plan'>
                    <button>+Create Custom Plan</button>
                </Link>
            </div>

            <div className='current_plan'>
                <h3>Current Training Plan</h3>
            </div>
            <div className='current_tp'>
                <div className='current_plan_imagefield'>
                    <img src='' alt='Current workout plan' className='current_plan_image'/>
                </div>
                <div className='current_plan_textfield'>Plan name</div>
            </div>

            <div className='current_plan'>
                <h3>Current Nutrition Plan</h3>
            </div>
            <div className='current_tp'>
                <div className='current_plan_imagefield'>
                    <img src='' alt='Current nutrition plan' className='current_plan_image'/>
                </div>
                <div className='current_plan_textfield'>Plan name</div>
            </div>

            <div className='current_plan'>
                <h3>My Custom Plans</h3>
            </div>

            <div className='custom_plan'>
                <div className='current_tp'>
                    <div className='current_plan_imagefield'>
                        <img src='' alt='My Plans' className='current_plan_image'/>
                    </div>
                    <div className='current_plan_textfield'>Plan name</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default MyPlan