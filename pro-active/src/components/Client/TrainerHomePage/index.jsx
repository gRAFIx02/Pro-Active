import { Route, Routes } from 'react-router-dom'
import './index.scss'
import TrainerHomepageLayout from '../TrainerHomePageLayout'
import TrainerExplore from '../TrainerExplore'
import TrainerTP from '../TrainerTP'
import TrainerNP from '../TrainerNP'
import TrainerTips from '../TrainerTips'
import TrainerAccount from '../TrainerAccount'

const TrainerHomePage = () =>
{
    return(
        <>
            <Routes>
                <Route path='/' element={<TrainerHomepageLayout />}>
                    <Route index element={<TrainerExplore />} />
                    <Route path='/my_tp' element={<TrainerTP />} />
                    <Route path='/my_np' element={<TrainerNP />} />
                    <Route path='/my_tips' element={<TrainerTips />} />
                    <Route path='/my_ac' element={<TrainerAccount />} />
                </Route>
            </Routes>
        </>
    )
}

export default TrainerHomePage