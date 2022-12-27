import { Link } from 'react-router-dom'
import './index.scss'

const TrainerTips = () =>
{
    return(
        <>
            <div className='t_tip_back'>
                <div className='t_tips_label'>My Tips</div>
                <Link to='/trainer_homepage/my_tips/add_tips'>
                    <button className='add_tips'>+ Add Tips</button>
                </Link>
                <div className='t_tip_box'>Show tips here</div>
            </div>
        </>
    )
}

export default TrainerTips