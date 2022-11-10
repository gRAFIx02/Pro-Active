import './index.scss'
import BlackBar from '../../../Assets/images/blackbar.png'
import exerciseDefault from '../../../Assets/images/exercise_default.png'
import workoutDefault from '../../../Assets/images/workout_default.png'
import nutritionDefault from '../../../Assets/images/nutrition_default.png'


const Explore = () =>
{
    return(
        <>
        <h2 className='name_tag'>Exercises</h2>
        <div className='outer_div'>
            <div className='inner_div'>
                <div className='imagefield'>
                    <img src={exerciseDefault} alt='' className='explore_images'/>
                </div>
                <div className='textfield'>
                    <h3 className='default_text'>Default text</h3>
                </div>
            </div>
        </div>

        <h2 className='name_tag'>Workout Plans</h2>
        <div className='outer_div'>
            <div className='inner_div'>
                <div className='imagefield'>
                    <img src={workoutDefault} alt='' className='explore_images'/>
                </div>
                <div className='textfield'>
                    <h3 className='default_text'>Default text</h3>
                </div>
            </div>
        </div>

        <h2 className='name_tag'>Nutrition Plans</h2>
        <div className='outer_div'>
            <div className='inner_div'>
                <div className='imagefield'>
                    <img src={nutritionDefault} alt='' className='explore_images'/>
                </div>
                <div className='textfield'>
                    <h3 className='default_text'>Default text</h3>
                </div>
            </div>
        </div>

        <div className='blackbar-container'>
            <img src = {BlackBar} alt='' className='blackbar' />
        </div>

        <footer className='footer'>Pro-Active Ⓒ Copyright 2022 Final Flash</footer>
        </>
    )
}

export default Explore