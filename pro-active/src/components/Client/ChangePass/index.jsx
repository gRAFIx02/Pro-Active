import './index.scss'




const ChangePass = () =>
{
    return(
        <>
        <div className='out_pas'>
            <h3>Change your password</h3>

            <div className='pas'>
                <label className='new'>New Password</label>
                <input type='password' placeholder='Enter new password' />
            </div>
            <div className='pas'>
                <label className='confirm'>Confirm Password</label>
                <input type='password' placeholder='Re-type the password' />
            </div>
            <div className='submit_btn'>
                <button>Submit</button>
            </div>
        </div>
        </>
    )
}

export default ChangePass