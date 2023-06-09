import React, {useRef} from 'react'
import "./SearchBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({setSearchString}) => {
  const searchBarRef = useRef();

  // Handles enter key press in search bar
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearchButtonClicked(e)
    }
  }

  const handleSearchButtonClicked = (e) => {
    e.preventDefault();
    setSearchString(searchBarRef.current.value);
  };

  return (
    <div className="search-bar-container">
        <input className="search-bar" ref={searchBarRef} onKeyDown={(e) => handleKeyDown(e)}></input>
        <button className="search-bar-search-button" onClick={(e) => handleSearchButtonClicked(e)}><FontAwesomeIcon icon={faMagnifyingGlass} /><p>Search</p></button>
    </div>
  )
}

export default SearchBar