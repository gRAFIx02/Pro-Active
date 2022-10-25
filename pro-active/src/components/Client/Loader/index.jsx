import './index.scss'
import loader from '../../../Assets/loaders/plate.png'

const Loader = () =>
{
    return(
        <>
            <div className='page-loader'>
                <img src = {loader} alt='' />
            </div>
        </>
    )
}

export default Loader