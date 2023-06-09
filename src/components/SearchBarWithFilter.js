import React, { useState, useEffect, useRef } from "react";
import "./SearchBarWithFilter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import FilterBar from "./FilterBar";

const SearchBarWithFilter = ({
  setSelectedTags,
  setSearchString,
  setSelectedClefs,
  setSelectedSides,
  defaultSearchString,
}) => {
  const searchBarRef = useRef();
  const [filterBarEnabled, setFilterBarEnabled] = useState(false);
  const [overrideBackgroundColor, setOverrideBackgroundColor] =
    useState("white");

  useEffect(() => {
    searchBarRef.current.value = defaultSearchString;
  }, []);

  // Handles enter key press in search bar
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchButtonClicked(e);
    }
  };

  const handleFilterButtonClicked = (e) => {
    e.preventDefault();
    setFilterBarEnabled(!filterBarEnabled);
  };

  const handleSearchButtonClicked = (e) => {
    e.preventDefault();
    setSearchString(searchBarRef.current.value);
  };

  return (
    <div className="search-filter-bar-container">
      <div className="search-filter-bar-top-container">
        <input
          className="search-filter-bar"
          ref={searchBarRef}
          onKeyDown={(e) => handleKeyDown(e)}
        ></input>
        <button
          className="search-filter-bar-search-button"
          onClick={(e) => handleSearchButtonClicked(e)}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <p>Search</p>
        </button>
        <button
          className="search-filter-bar-filter-button"
          onClick={(e) => handleFilterButtonClicked(e)}
        >
          <FontAwesomeIcon icon={faChevronDown} />
          <p>Filter</p>
        </button>
      </div>
      {filterBarEnabled && (
        <div className="search-filter-bar-filter-component-container">
          <FilterBar
            setSelectedTags={setSelectedTags}
            setSelectedClefs={setSelectedClefs}
            setSelectedSides={setSelectedSides}
            overrideBackgroundColor={overrideBackgroundColor}
            currSearchString={searchBarRef.current.value}
            setSearchString={setSearchString}
          />
        </div>
      )}
    </div>
  );
};

export default SearchBarWithFilter;
