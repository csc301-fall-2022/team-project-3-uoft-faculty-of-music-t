import React, {useRef} from 'react'
import "./SearchBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({setSearchString}) => {
  const searchBarRef = useRef();
  const handleSearchButtonClicked = (e) => {
    e.preventDefault();
    setSearchString(searchBarRef.current.value);
  };

  return (
    <div className="search-bar-container">
        <input className="search-bar" ref={searchBarRef}></input>
        <button className="search-bar-search-button" onClick={(e) => handleSearchButtonClicked(e)}><FontAwesomeIcon icon={faMagnifyingGlass} /><p>Search</p></button>
    </div>
  )
}

export default SearchBar