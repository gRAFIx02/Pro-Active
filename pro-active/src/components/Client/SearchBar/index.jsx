import './index.scss'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const SearchBar = () =>
{
    const [searchTerm, setSearchTerm] = useState("");
    return(
        <>
        <div className='search'>
            <div className='searchInput'>
                <input type='text' placeholder='Search...' className='input-search'/>
                <div className='searchIcon'>
                    <FontAwesomeIcon icon={faSearch} className='search_icon'/>
                </div>
            </div>
        </div>
        </>
    )
}

export default SearchBar