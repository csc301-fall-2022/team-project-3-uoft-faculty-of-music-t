import React from 'react'
import "./SearchBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
  return (
    <div className="search-bar-container">
        <input className="search-bar"></input>
        <button className="search-bar-search-button"><FontAwesomeIcon icon={faMagnifyingGlass} /><p>Search</p></button>
    </div>
  )
}

export default SearchBar