import React, {useState, useEffect} from 'react'
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = ({ getQuery }) => {

  const [text, setText] = useState('');


  const queryChange = (q) => {
      setText(q)
      getQuery(q)
  }

  return (
    <div>
      <div className="search-box">
            <div className="input-box">
              <SearchIcon className="search-icon"/>
              <input 
                  className="search" 
                  type="text" placeholder="Enter the character name" 
                  value={text}
                  onChange={(e) => queryChange(e.target.value)}
              />
              <button className="btn-search">Search</button>
            </div>
          </div>
    </div>
  )
}

export default SearchBar
