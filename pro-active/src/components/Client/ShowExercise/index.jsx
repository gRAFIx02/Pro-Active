import './index.scss'

const ShowExercise = () =>
{
    return(
        <>
            <div className='back'>
                <div className='imagefield'>
                    <img src='' alt='exercise image' />
                </div>
                <div className='exercise_name'>
                    <label>Exercise name : </label>
                    <div className='textfield'></div>
                </div>
                <div className='catNtype'>
                    <label>Category &emsp; &emsp; : </label>
                    <div className='textfield'></div>
                </div>
                <div className='catNtype'>
                    <label>Type  &emsp; &emsp;  &emsp; &ensp; : </label>
                    <div className='textfield'></div>
                </div>
                <div className='description'>
                    <label>Description :</label>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default ShowExercise