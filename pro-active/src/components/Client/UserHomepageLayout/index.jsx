import './index.scss'
import UserSidebar from '../UserSidebar'
//import Loader from '../Loader'
import SearchBar from '../SearchBar'
import { Outlet } from 'react-router-dom'

const UserHomepageLayout = () =>
{
    return(
        <>
            <div className='user_homepage'>
                <UserSidebar />
                <SearchBar />
                <div className='explore_page'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default UserHomepageLayout