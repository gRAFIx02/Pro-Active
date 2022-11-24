import './index.scss'

const Choice = () =>
{
    return(
        <>
            <div className='row'>
                <input type='number' placeholder='Choose day' className='day'/>
                <input type='text' placeholder='Choose exercise' />
                <input type='text' placeholder='Choose exercise' />
                <input type='text' placeholder='Choose exercise' />
                <input type='text' placeholder='Choose exercise' />
            </div>
        </>
    )
}

export default Choice