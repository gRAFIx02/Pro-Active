import { Route, Routes, useNavigate } from 'react-router-dom'
import './index.scss'
import UserHomepageLayout from '../UserHomepageLayout'
import Explore from '../Explore'
import MyAccount from '../MyAccount'
import TrainingPlans from '../TrainingPlans'
import NutritionPlan from '../NutritionPlans'
import { useEffect } from 'react'
import ShowExercise from '../ShowExercise'
import ShowTP from '../ShowTP'
import ShowNP from '../ShowNP'

const UserHomePage = () =>
{
    const navigate = useNavigate();

    useEffect(() =>
    {
        if(!localStorage.getItem("logged-in-user"))
        {
            navigate("/unauthorized");
        }
    });


    return(
        <>
            <Routes>
                <Route path='/' element={<UserHomepageLayout />}>
                    <Route index element={<Explore />} />
                    <Route path='/exercise' element={<ShowExercise />} />
                    <Route path='/training_plan' element={<TrainingPlans />} />
                    <Route path='/tp' element={<ShowTP />} />
                    <Route path='/nutrition_plan' element={<NutritionPlan />} />
                    <Route path='/np' element={<ShowNP />} />
                    <Route path='/my_ac' element={<MyAccount />} />
                </Route>
            </Routes>
        </>
    )
}

export default UserHomePage