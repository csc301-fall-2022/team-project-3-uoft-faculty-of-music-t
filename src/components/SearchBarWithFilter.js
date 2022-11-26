import React, {useState, useEffect} from 'react'
import "./SearchBarWithFilter.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass, faChevronDown} from '@fortawesome/free-solid-svg-icons'
import FilterBar from './FilterBar'

const SearchBarWithFilter = ({setSelectedTags}) => {
  const [filterBarEnabled, setFilterBarEnabled] = useState(false)
  const [overrideBackgroundColor, setOverrideBackgroundColor] = useState("white")

  const handleFilterButtonClicked = (e) => {
    e.preventDefault()
    setFilterBarEnabled(!filterBarEnabled)
  }

  return (
    <div className="search-filter-bar-container">
      <div className="search-filter-bar-top-container">
        <input className="search-filter-bar"></input>
        <button className="search-filter-bar-search-button"><FontAwesomeIcon icon={faMagnifyingGlass} /><p>Search</p></button>
        <button className="search-filter-bar-filter-button" onClick={(e) => handleFilterButtonClicked(e)}><FontAwesomeIcon icon={faChevronDown} /><p>Filter</p></button>
      </div>
      {filterBarEnabled && (
        <div className="search-filter-bar-filter-component-container">
          <FilterBar setSelectedTags={setSelectedTags} overrideBackgroundColor={overrideBackgroundColor}/>
        </div>
      )}
    </div>
  )
}

export default SearchBarWithFilter