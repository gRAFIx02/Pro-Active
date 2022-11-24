import './index.scss'
import { useLocation } from 'react-router-dom'
const ShowExercise = () =>
{
     const {exercise} = useLocation().state;
     console.log(exercise);
     console.log(exercise.img);

    return(
        <>
            <div className='back'>
                <div className='imagefield'>
                    <img src={exercise.img} alt='exercise' />
                </div>
                <div className='exercise_name'>
                    <label>Exercise name : </label>
                    <div className='textfield'>{exercise.name}</div>
                </div>
                <div className='catNtype'>
                    <label>Category &emsp; &emsp; : </label>
                    <div className='textfield'>{exercise.category}</div>
                </div>
                <div className='catNtype'>
                    <label>Type  &emsp; &emsp;  &emsp; &ensp; : </label>
                    <div className='textfield'>{exercise.type}</div>
                </div>
                <div className='description'>
                    <label>Description :</label>
                    <div>{exercise.description}</div>
                </div>
            </div>
        </>
    )
}

export default ShowExercise