import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import Ulogo from '../../../Assets/images/proactive.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faUserCheck } from '@fortawesome/free-solid-svg-icons'
import Training from '../../../Assets/icons/training.png'
import Nutrition from '../../../Assets/icons/nutrition.png'
import Tips from '../../../Assets/icons/tips.png'

const TrainerSidebar = () =>
{
    return(
        <>
        <div className='t_nav-bar'>
                <Link className='user_logo' to='/'>
                    <img src={Ulogo} alt='u_logo' className='user_img' />
                </Link>

                <nav className='user_nav'>
                    <div className='t_container_sidebar'>
                        <NavLink exact='true' activeclassname='active' className='explore_link' to='/trainer_homepage'>
                            <FontAwesomeIcon icon={faCompass} className='explore' color='black'/>
                            <label className='sidebarLabel'>Explore</label>
                        </NavLink>
                    </div>

                    <div className='t_container_sidebar'>
                        <NavLink exact='true' activeclassname='active' className='training_link' to='/trainer_homepage/my_tp'>
                            <img className='sidebar_logo' src={Training} alt='traningLogo'/>
                            <label className='sidebarLabel'>My Training Plans</label>
                        </NavLink>
                    </div>

                    <div className='t_container_sidebar'>
                        <NavLink exact='true' activeclassname='active' className='nutrition_link' to='/trainer_homepage/my_np'>
                            <img className='sidebar_logo' src={Nutrition} alt='nutritionLogo'/>
                            <label className='sidebarLabel'>My Nutrition Plans</label>
                        </NavLink>
                    </div>

                    <div className='t_container_sidebar'>
                         <NavLink exact='true' activeclassname='active' className='tips_link' to='/trainer_homepage/my_tips'>
                            <img className='sidebar_logo' src={Tips} alt='tipsLogo'/>
                            <label className='sidebarLabel'>My Tips</label>
                        </NavLink>
                    </div>

                    <div className='t_container_sidebar'>
                        <NavLink exact='true' activeclassname='active' className='ac_link' to='/trainer_homepage/my_ac'>
                            <FontAwesomeIcon icon = {faUserCheck} color = 'black' className='explore'/>
                            <label className='sidebarLabel'>My Account</label>
                        </NavLink>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default TrainerSidebar