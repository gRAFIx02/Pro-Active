import './index.scss'
import nutritionDefault from '../../../Assets/images/nutrition_default.png'

const AddNutrition = () =>
{
    return(
        <>
            <div className='outershell'>
                <form>
                  
                    <div className='container_plan_image'>
                        <img src={nutritionDefault} alt='plan_image' className='plan_image'/>
                    </div>

                    <div className='container_button_browse'>
                        <input type='file'/>
                    </div>

                    <div className='plan_name'>
                        <label className='plan_label'>Plan name:</label>
                        <input type='text' placeholder='Enter Nutrition Plan Name' className='np_name' required/>
                    </div>

                    <div className='description'>
                        <div className='desc'>
                            <label className='desc_label'>Description:</label>
                        </div>
                        <textarea type='text' placeholder='Describe your plan in a few words' className='np_desc' required />
                    </div>

                    <div className='column_names'>
                      <label>Day</label>
                      <label>Breakfast</label>
                      <label>Lunch</label>
                      <label>Snacks</label>
                      <label>Dinner</label>
                    </div>

                    {/* row 1 */}
                    <div className='row'> 
                      <input type='number' placeholder='Choose day' className='day'/>
                      <input type='text' placeholder='Choose meal' />
                      <input type='text' placeholder='Choose meal' />
                      <input type='text' placeholder='Choose meal' />
                      <input type='text' placeholder='Choose meal' />
                    </div>

                    {/* row 2 */}
                    <div className='row'> 
                      <input type='number' placeholder='Choose day' className='day'/>
                      <input type='text' placeholder='Choose meal' />
                      <input type='text' placeholder='Choose meal' />
                      <input type='text' placeholder='Choose meal' />
                      <input type='text' placeholder='Choose meal' />
                    </div>

                    {/* row 3 */}
                    <div className='row'> 
                      <input type='number' placeholder='Choose day' className='day'/>
                      <input type='text' placeholder='Choose meal' />
                      <input type='text' placeholder='Choose meal' />
                      <input type='text' placeholder='Choose meal' />
                      <input type='text' placeholder='Choose meal' />
                    </div>

                    {/* row 4 */}
                    <div className='row'> 
                      <input type='number' placeholder='Choose day' className='day'/>
                      <input type='text' placeholder='Choose meal' />
                      <input type='text' placeholder='Choose meal' />
                      <input type='text' placeholder='Choose meal' />
                      <input type='text' placeholder='Choose meal' />
                    </div>

                    {/* row 5 */}
                    <div className='row'> 
                      <input type='number' placeholder='Choose day' className='day'/>
                      <input type='text' placeholder='Choose meal' />
                      <input type='text' placeholder='Choose meal' />
                      <input type='text' placeholder='Choose meal' />
                      <input type='text' placeholder='Choose meal' />
                    </div>

                    {/* row 6 */}
                    <div className='row'> 
                      <input type='number' placeholder='Choose day' className='day'/>
                      <input type='text' placeholder='Choose meal' />
                      <input type='text' placeholder='Choose meal' />
                      <input type='text' placeholder='Choose meal' />
                      <input type='text' placeholder='Choose meal' />
                    </div>

                    {/* row 7 */}
                    <div className='row'> 
                      <input type='number' placeholder='Choose day' className='day'/>
                      <input type='text' placeholder='Choose meal' />
                      <input type='text' placeholder='Choose meal' />
                      <input type='text' placeholder='Choose meal' />
                      <input type='text' placeholder='Choose meal' />
                    </div>

                    <div className='container_button_submit'>
                        <button className='plan_upload'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddNutrition