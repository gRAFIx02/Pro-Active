import './index.scss'
import BlackBar from '../../../Assets/images/blackbar.png'

const Explore = () =>
{
    return(
        <>
        <h2 className='name_tag'>Exercises</h2>
        <div className='outer_div'>
            <div className='inner_div'>
                <div className='imagefield'></div>
                <div className='textfield'></div>
            </div>
        </div>

        <h2 className='name_tag'>Workout Plans</h2>
        <div className='outer_div'>
            <div className='inner_div'>
                <div className='imagefield'></div>
                <div className='textfield'></div>
            </div>
        </div>

        <h2 className='name_tag'>Nutrition Plans</h2>
        <div className='outer_div'>
            <div className='inner_div'>
                <div className='imagefield'></div>
                <div className='textfield'></div>
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