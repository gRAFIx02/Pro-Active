import './index.scss'
import workoutDefault from '../../../Assets/images/workout_default.png'

const AddPlan = () =>
{
    return(
        <>
            <div className='outershell'>
                <form>
                    <div className='container_plan_image'>
                        <img src={workoutDefault} alt='Workout Default' className='plan_image' />
                    </div>

                    <div className='container_button_browse'>
                        <input type='file' />
                    </div>

                    <div className='container_button_upload'>
                        <button className='plan_upload'>Upload</button>
                    </div>

                    <div className='plan_name'>
                        <label className='plan_label'>Plan name:</label>
                        <input type='text' placeholder='Enter Workout Plan Name' className='wp_name' required />
                    </div>

                    <div className='description'>
                        <div className='desc'>
                            <label className='desc_label'>Description:</label>
                        </div>
                        <textarea type='text' placeholder='Describe your plan in a few words' className='wp_desc' required />
                    </div>

                    <div className='catNdif'>
                        <label className='cat_label'>Category: &ensp;</label>
                        <select name='cat' id='cat' className='cat_select'>
                            <option value={'weightlifting'}>Weight-lifting</option>
                            <option value={'calisthenics'}>Calisthenics</option>
                        </select>

                        <label className='cat_label'>Difficulty: &ensp;</label>
                        <select name='dif' id='dif' className='cat_select'>
                            <option value={'beginner'}>Beginner</option>
                            <option value={'intermediate'}>Intermediate</option>
                            <option value={'advanced'}>Advanced</option>
                            <option value={'expert'}>Expert</option>
                        </select>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddPlan