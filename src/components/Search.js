import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Search() {
  return (
    <div className='nav__search'>
        <div className='nav__searchcontainer'>
        <input type="text" placeholder='Search..'/>
        <SearchIcon className='nav__icon'/>
        </div>
        
    </div>
  )
}

export default Search