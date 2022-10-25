import './index.scss'
import { Link } from 'react-router-dom'
import LogoH from '../../../Assets/images/proactive.png'

const HomeLogo = () =>
(
    <div className='home-logo'>
        <Link className='logo' to='/'>
            <img src={LogoH} alt='logo' />
        </Link>
    </div>
)

export default HomeLogo