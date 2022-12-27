import './index.scss'

const AddTips = () => 
{
    return (
        <>
            <div className='out'>
                <form>
                    <div className='write_tip'>
                        <label>Write your tips about exercise/nutrition :</label>
                    </div>
                    <div className='desc_tip'>
                        <textarea placeholder='Write your tip here' />
                    </div>

                    <div className='tip_submit'>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddTips