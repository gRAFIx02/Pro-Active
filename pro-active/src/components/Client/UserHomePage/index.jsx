import { Route, Routes } from 'react-router-dom'
import './index.scss'
import UserHomepageLayout from '../UserHomepageLayout'
import Explore from '../Explore'

const UserHomePage = () =>
{
    return(
        <>
            <Routes>
                <Route path='/' element={<UserHomepageLayout />}>
                    <Route index element={<Explore />} />
                </Route>
            </Routes>
        </>
    )
}

export default UserHomePage