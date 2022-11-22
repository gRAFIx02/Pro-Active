import './index.scss'
import TrainerSidebar from '../TrainerSidebar'
import SearchBar from '../SearchBar'
import { Outlet } from 'react-router-dom'

const TrainerHomePageLayout = () => 
{
    return (
        <>
            <div className='homepage'>
                <TrainerSidebar />
                <SearchBar />
                <div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default TrainerHomePageLayout