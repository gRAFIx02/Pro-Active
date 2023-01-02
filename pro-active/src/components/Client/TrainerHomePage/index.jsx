import { Route, Routes, useNavigate } from 'react-router-dom'
import './index.scss'
import TrainerHomepageLayout from '../TrainerHomePageLayout'
import TrainerExplore from '../TrainerExplore'
import TrainerTP from '../TrainerTP'
import TrainerNP from '../TrainerNP'
import TrainerTips from '../TrainerTips'
import TrainerAccount from '../TrainerAccount'
import { useEffect } from 'react'
import AddPlan from '../AddPlan'
import ShowExercise from '../ShowExercise'
import AddNutrition from '../AddNutrition'
import ShowTP from '../ShowTP'
import ShowNP from '../ShowNP'
import AddTips from '../AddTips'
import ChangePassT from '../ChangePassT'

const TrainerHomePage = () =>
{
    const navigate = useNavigate();

    useEffect(()=>
    {
        if(!localStorage.getItem("logged-in-trainer"))
        {
            navigate("/unauthorized");
        }
    });

    return(
        <>
            <Routes>
                <Route path='/' element={<TrainerHomepageLayout />}>
                    <Route index element={<TrainerExplore />} />
                    <Route path='/exercise' element={<ShowExercise />} />
                    <Route path='/my_tp' element={<TrainerTP />} />
                    <Route path='/my_tp/add_plan' element={<AddPlan />} />
                    <Route path='/tp' element={<ShowTP />} />
                    <Route path='/my_np' element={<TrainerNP />} />
                    <Route path='/np' element={<ShowNP />} />
                    <Route path='/my_np/add_plan' element={<AddNutrition />} />
                    <Route path='/my_tips' element={<TrainerTips />} />
                    <Route path='/my_tips/add_tips' element={<AddTips />} />
                    <Route path='/my_ac' element={<TrainerAccount />} />
                    <Route path='/my_ac/change_password' element={<ChangePassT/>} />
                </Route>
            </Routes>
        </>
    )
}

export default TrainerHomePage