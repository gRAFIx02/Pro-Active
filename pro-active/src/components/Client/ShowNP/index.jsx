import './index.scss'

const ShowNP = () =>
{
    return(
        <>
            <div className='np_back'>
                <div className='imagefield'>
                    <img src='' alt='exercise' />
                </div>
                <div className='plan_name'>
                    <label>Plan name &emsp; &emsp;: </label>
                    <div className='textfield'></div>
                </div>
                <div className='uploader'>
                    <label>Uploaded By &emsp; &emsp;: </label>
                    <div className='textfield'></div>
                </div>
                <div className='description'>
                    <label>Description :</label>
                    <div></div>
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