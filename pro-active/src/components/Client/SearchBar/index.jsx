import UserProfileHolder from '../UserProfileHolder'
import './index.scss'

const SearchBar = () =>
{
    return(
        <>
        <div className='search'>
            <div className='searchInput'>
                <input type='text' placeholder='Search...' className='input-search'/>
                <UserProfileHolder />
            </div>
        </div>
        </>
    )
}

export default SearchBar