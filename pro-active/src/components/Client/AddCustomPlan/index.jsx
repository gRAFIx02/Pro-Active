import './index.scss'

const AddCustomPlan = () =>
{
    return(
        <>
        <div className='outershell'>
                <form>
                  
                    <div className='container_plan_image'>
                        <img src='' alt='plan_image' className='plan_image'/>
                    </div>

                    <div className='container_button_browse'>
                        <input type='file'/>
                    </div>

                    <div className='plan_name'>
                        <label className='plan_label'>Plan name:</label>
                        <input type='text' placeholder='Enter Workout Plan Name' className='wp_name' required/>
                    </div>

                    <div className='description'>
                        <div className='desc'>
                            <label className='desc_label'>Description:</label>
                        </div>
                        <textarea type='text' placeholder='Describe your plan in a few words' className='wp_desc' required/>
                    </div>

                    <div className='catNdif'>
                        <label className='cat_label'>Category: &ensp;</label>
                        <select name='cat' id='cat' className='cat_select'>
                            <option value={'Weight-lifting'}>Weight-lifting</option>
                            <option value={'Calisthenics'}>Calisthenics</option>
                        </select>

                        <label className='cat_label'>Difficulty: &ensp;</label>
                        <select name='dif' id='dif' className='cat_select'>
                            <option value={'Beginner'}>Beginner</option>
                            <option value={'Intermediate'}>Intermediate</option>
                            <option value={'Advanced'}>Advanced</option>
                            <option value={'Expert'}>Expert</option>
                        </select>
                    </div>

                    <div className='column_names'>
                      <label>Day</label>
                      <label>Workout 1</label>
                      <label>Workout 2</label>
                      <label>Workout 3</label>
                      <label>Workout 4</label>
                    </div>

                    {/* row 1 */}
                    <div className='row'> 
                      <input type='number' placeholder='Choose day' className='day'/>
                      <input type='text' placeholder='Choose exercise' />
                      <input type='text' placeholder='Choose exercise' />
                      <input type='text' placeholder='Choose exercise' />
                      <input type='text' placeholder='Choose exercise' />
                    </div>

                    {/* row 2 */}
                    <div className='row'> 
                      <input type='number' placeholder='Choose day' className='day' />
                      <input type='text' placeholder='Choose exercise'  />
                      <input type='text' placeholder='Choose exercise' />
                      <input type='text' placeholder='Choose exercise' />
                      <input type='text' placeholder='Choose exercise'/>
                    </div>

                    {/* row 3 */}
                    <div className='row'> 
                      <input type='number' placeholder='Choose day' className='day'/>
                      <input type='text' placeholder='Choose exercise' />
                      <input type='text' placeholder='Choose exercise'/>
                      <input type='text' placeholder='Choose exercise'/>
                      <input type='text' placeholder='Choose exercise'/>
                    </div>

                    {/* row 4 */}
                    <div className='row'> 
                      <input type='number' placeholder='Choose day' className='day' />
                      <input type='text' placeholder='Choose exercise' />
                      <input type='text' placeholder='Choose exercise' />
                      <input type='text' placeholder='Choose exercise'/>
                      <input type='text' placeholder='Choose exercise' />
                    </div>

                    {/* row 5 */}
                    <div className='row'> 
                      <input type='number' placeholder='Choose day' className='day'/>
                      <input type='text' placeholder='Choose exercise' />
                      <input type='text' placeholder='Choose exercise'/>
                      <input type='text' placeholder='Choose exercise' />
                      <input type='text' placeholder='Choose exercise'/>
                    </div>

                    {/* row 6 */}
                    <div className='row'> 
                      <input type='number' placeholder='Choose day' className='day'/>
                      <input type='text' placeholder='Choose exercise' />
                      <input type='text' placeholder='Choose exercise' />
                      <input type='text' placeholder='Choose exercise' />
                      <input type='text' placeholder='Choose exercise'/>
                    </div>

                    {/* row 7 */}
                    <div className='row'> 
                      <input type='number' placeholder='Choose day' className='day'/>
                      <input type='text' placeholder='Choose exercise' />
                      <input type='text' placeholder='Choose exercise' />
                      <input type='text' placeholder='Choose exercise' />
                      <input type='text' placeholder='Choose exercise' />
                    </div>

                    <div className='container_button_submit'>
                        <button className='plan_upload'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddCustomPlan