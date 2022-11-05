import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import Ulogo from '../../../Assets/images/proactive.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faUserCheck } from '@fortawesome/free-solid-svg-icons'
import Training from '../../../Assets/icons/training.png'
import Nutrition from '../../../Assets/icons/nutrition.png'
import Tips from '../../../Assets/icons/tips.png'
import Myplan from '../../../Assets/icons/myplans.png'

const UserSidebar = () => 
{
    return (
        <>
            <div className='nav-bar'>
                <Link className='user_logo' to='/user_homepage'>
                    <img src={Ulogo} alt='u_logo' className='user_img' />
                </Link>

                <nav className='user_nav'>
                    <div className='container_sidebar'>
                        <NavLink exact='true' activeclassname='active' className='explore_link' to='/user_homepage'>
                            <FontAwesomeIcon icon={faCompass} className='explore' color='black'/>
                            <label className='sidebarLabel'>Explore</label>
                        </NavLink>
                    </div>

                    <div className='container_sidebar'>
                        <NavLink exact='true' activeclassname='active' className='training_link' to='/user_homapge/training_plan'>
                            <img className='sidebar_logo' src={Training} alt='traningLogo'/>
                            <label className='sidebarLabel'>Training Plans</label>
                        </NavLink>
                    </div>

                    <div className='container_sidebar'>
                        <NavLink exact='true' activeclassname='active' className='nutrition_link' to='/user_homapge/nutrition_plan'>
                            <img className='sidebar_logo' src={Nutrition} alt='nutritionLogo'/>
                            <label className='sidebarLabel'>Nutrition Plans</label>
                        </NavLink>
                    </div>

                    <div className='container_sidebar'>
                         <NavLink exact='true' activeclassname='active' className='tips_link' to='/user_homapge/tips'>
                            <img className='sidebar_logo' src={Tips} alt='tipsLogo'/>
                            <label className='sidebarLabel'>Tips</label>
                        </NavLink>
                    </div>

                    <div className='container_sidebar'>
                        <NavLink exact='true' activeclassname='active' className='my_link' to='/user_homapge/my_plans'>
                            <img className='sidebar_logo' src={Myplan} alt='myLogo'/>
                            <label className='sidebarLabel'>My Plans</label>
                        </NavLink>
                    </div>

                    <div className='container_sidebar'>
                        <NavLink exact='true' activeclassname='active' className='ac_link' to='/user_homapge/my_ac'>
                            <FontAwesomeIcon icon = {faUserCheck} color = 'black' className='explore'/>
                            <label className='sidebarLabel'>My Account</label>
                        </NavLink>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default UserSidebar