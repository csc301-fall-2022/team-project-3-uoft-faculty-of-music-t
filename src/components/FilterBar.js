import React from 'react'
import "./FilterBar.css"

const FilterBar = () => {
  return (
    <div className="filter-bar-container">
        <h2 className="filter-title">Filter</h2>
        <div className="inputs-container">
            <div className="side-inputs-container">
                <h3 className="side-inputs-container-title">Left Side/Right Side</h3>
                <div className="side-inputs-container-input-label-container">
                    <input type="checkbox"></input>
                    <p>Left Side</p>
                </div>
                <div className="side-inputs-container-input-label-container">
                    <input type="checkbox"></input>
                    <p>Right Side</p>
                </div>
            </div>
            <div className="tag-levels-inputs-container">
                <h3 className="tag-levels-inputs-container-title">
                    Categories
                </h3>
                <div className="tag-levels-inputs-container-select-label-container">
                    <p>Level 1</p>
                    <select></select>
                </div>
                <div className="tag-levels-inputs-container-select-label-container">
                    <p>Level 2</p>
                    <select></select>
                </div>
                <div className="tag-levels-inputs-container-select-label-container">
                    <p>Level 3</p>
                    <select></select>
                </div>
            </div>
            <div className="clef-inputs-container">
                <h3 className="clef-inputs-container-title">
                    Clef
                </h3>
                <div className="clef-inputs-container-input-label-container">
                    <input type="checkbox"></input>
                    <p>Tenor</p>
                </div>
                <div className="clef-inputs-container-input-label-container">
                    <input type="checkbox"></input>
                    <p>Treble</p>
                </div>
            </div>
        </div>
        <div className="apply-filters-button-container">
            <button className="apply-filters-button">Apply Filters</button>
        </div>
    </div>
  )
}

export default FilterBar