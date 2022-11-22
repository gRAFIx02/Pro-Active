import { Route, Routes } from 'react-router-dom'
import './index.scss'
import TrainerHomepageLayout from '../TrainerHomePageLayout'

const TrainerHomePage = () =>
{
    return(
        <>
            <Routes>
                <Route path='/' element={<TrainerHomepageLayout />}>
                </Route>
            </Routes>
        </>
    )
}

export default TrainerHomePage