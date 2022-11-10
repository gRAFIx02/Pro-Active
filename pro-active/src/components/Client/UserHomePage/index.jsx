import { Route, Routes } from 'react-router-dom'
import './index.scss'
import UserHomepageLayout from '../UserHomepageLayout'
import Explore from '../Explore'
import MyAccount from '../MyAccount'

const UserHomePage = () =>
{
    return(
        <>
            <Routes>
                <Route path='/' element={<UserHomepageLayout />}>
                    <Route index element={<Explore />} />
                    <Route path='/my_ac' element={<MyAccount />} />
                </Route>
            </Routes>
        </>
    )
}

export default UserHomePage