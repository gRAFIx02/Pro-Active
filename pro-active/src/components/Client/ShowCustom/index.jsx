import './index.scss'

const ShowCustom = () =>
{
    return(
        <>
        <div className='cp_back'>
                <div className='imagefield'>
               
                    <img src='' alt='exercise' />
                </div>
                <div className='plan_name'>
                    <label>Plan name &emsp; &emsp;: </label>
                    <div className='textfield'></div>
                </div>
                <div className='difficulty'>
                    <label>Difficulty &emsp; &ensp; : </label>
                    <div className='textfield'></div>
                </div>
                <div className='catNdiff'>
                    <label>Category &emsp; &emsp; : </label>
                    <div className='textfield'></div>
                </div>
                <div className='description'>
                    <label>Description :</label>
                    <div></div>
                </div>
                <button className='hide_btn'>Hide this plan</button> 

                <div className='column_names'>
                      <label>Day</label>
                      <label>Workout 1</label>
                      <label>Workout 2</label>
                      <label>Workout 3</label>
                      <label>Workout 4</label>
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

export default ShowCustom