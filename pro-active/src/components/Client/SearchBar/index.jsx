import './index.scss'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const SearchBar = () =>
{
    return(
        <>
        <div className='search'>
            <div className='searchInput'>
                <input type='text' placeholder='Click the icon to search...' className='input-search'/>
                <div className='searchIcon'>
                    <Link to='/user_homepage/search'>
                        <FontAwesomeIcon icon={faSearch} className='search_icon'/>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default SearchBar