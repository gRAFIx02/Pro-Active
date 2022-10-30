import './index.scss'
//import { Link } from 'react-router-dom'
import UserSidebar from '../UserSidebar'
import Loader from '../Loader'
import SearchBar from '../SearchBar'

const UserHomePage = () =>
{
    return(
        <>
            <div className='user_homepage'>
                <UserSidebar />
                <SearchBar />
            </div>
            <Loader />
        </>
    )
}

export default UserHomePage