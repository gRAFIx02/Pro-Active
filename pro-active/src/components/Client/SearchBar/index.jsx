import './index.scss'

const SearchBar = () =>
{
    return(
        <>
        <div className='search'>
            <div className='searchInput'>
                <input type='text' placeholder='Search...' className='input-search'/>
            </div>
        </div>
        </>
    )
}

export default SearchBar