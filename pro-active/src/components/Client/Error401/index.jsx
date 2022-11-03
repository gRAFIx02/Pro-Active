import './index.scss'
import errorImage from '../../../Assets/images/401.jpg'
import { Link } from 'react-router-dom'

const Error401 = () =>
{
    var code = '401';
    var errorMsg = 'Hold it right there! You are not authorized to access this page.'
    return(
        <>
            <div className='errorPage'>
                <h1 className='errorCode'>{code}!</h1>
                <img src = {errorImage} alt = '' className='errorImg' />
                <p className='errorMsg'>{errorMsg}</p>
                <Link to = '/'>
                    <p className='sendback'>Go back home</p>
                </Link>
            </div>
        </>
    )
}

export default Error401