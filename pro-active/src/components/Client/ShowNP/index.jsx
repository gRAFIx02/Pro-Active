import './index.scss'

import { useLocation } from 'react-router-dom'
const ShowNP = () =>
{
    const {nutrition} = useLocation().state;
    console.log(nutrition);

    return(
        <>
            <div className='np_back'>
                <div className='imagefield'>
                    <img src={nutrition.img} alt='exercise' />
                </div>
                <div className='plan_name'>
                    <label>Plan name &emsp; &emsp;: </label>
                    <div className='textfield'>{nutrition.plan_name}</div>
                </div>
                <div className='uploader'>
                    <label>Uploaded By &emsp; &emsp;: </label>
                    <div className='textfield'>{nutrition.uploaded_by}</div>
                </div>
                <div className='description'>
                    <label>Description :</label>
                    <div>{nutrition.description}</div>
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
                      <div className='entry'></div>
                      <div className='entry'></div>
                      <div className='entry'></div>
                      <div className='entry'></div>
                      <div className='entry'></div>
                </div>
            </div>
        </>
    )
}

export default ShowNP