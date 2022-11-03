import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const UserProfileHolder = () =>
{
    return(
        <>
            <div className='usericondiv'>
                    <FontAwesomeIcon icon = {faUser} color = '#002d3d' className='usericon'/>
            </div>
        </>
    )
}

export default UserProfileHolder