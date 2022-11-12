import './index.scss'
import errorImage from '../../../Assets/images/nisekoi.jpg'
import { Link } from 'react-router-dom'

const Error404 = () =>
{
    var code = '404';
    var errorMsg = 'Oops! Looks like you are lost... Click below to go back home'
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

export default Error404