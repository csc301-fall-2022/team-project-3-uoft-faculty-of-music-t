import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
import "./FilterBar.css";
import { getTagsByLevel, getSubTagsByTag } from "../api/requests";

const FilterBar = ({
  setSelectedTags,
  setSelectedClefs,
  setSelectedSides,
  overrideBackgroundColor,
  currSearchString,
  setSearchString,
}) => {
  const level1TagSelectRef = useRef();
  const level2TagSelectRef = useRef();
  const level3TagSelectRef = useRef();
  const leftSideCheckboxRef = useRef();
  const rightSideCheckboxRef = useRef();
  const otherCheckboxRef = useRef();
  const tenorClefCheckboxRef = useRef();
  const trebleClefCheckboxRef = useRef();
  const [level1Tags, setLevel1Tags] = useState([]);
  const [level2Tags, setLevel2Tags] = useState([]);
  const [level3Tags, setLevel3Tags] = useState([]);
  const [categoryInLevel1, setCategoryInlevel1] = useState("-1");
  const [categoryInLevel2, setCategoryInlevel2] = useState("-1");
  const [categoryInLevel3, setCategoryInlevel3] = useState("-1");
  const [filtersApplied, setFiltersApplied] = useState(false);

  const selectStyles = {
    control: (provided, state) => ({
      ...provided,
      background: "#fff",
      borderColor: "#9e9e9e",
      minHeight: "24px",
      height: "24px",
      boxShadow: state.isFocused ? null : null,
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      height: "24px",
      padding: "0 5px",
    }),
    input: (provided, state) => ({
      ...provided,
      margin: "0px",
      padding: "0px",
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: "24px",
    }),
  };

  // DEFAULT
  useEffect(() => {
    getLevel1Tags();
  }, []);

  const getLevel1Tags = () => {
    getTagsByLevel(1).then((tags) => {
      tags.unshift({});
      const transformedTags = transformRawTagsList(tags);
      setLevel1Tags(transformedTags);
    });
  };

  const getLevel2Tags = (tagId) => {
    getSubTagsByTag(tagId).then((tags) => {
      if (tags.length !== 0) {
        tags.unshift({ tag: {} });
        const transformedTags = transformRawSubtagsList(tags);
        setLevel2Tags(transformedTags);
      }
    });
  };

  const getLevel3Tags = (tagId) => {
    getSubTagsByTag(tagId).then((tags) => {
      if (tags.length !== 0) {
        tags.unshift({ tag: {} });
        const transformedTags = transformRawSubtagsList(tags);
        setLevel3Tags(transformedTags);
      }
    });
  };

  const transformRawTagsList = (tags) => {
    let transformedTags = [];
    for (let tag of tags) {
      if (Object.keys(tag).length === 0) {
        transformedTags.push({ value: "-1", label: "" });
      } else {
        transformedTags.push({ value: tag.id, label: tag.tag_name });
      }
    }
    return transformedTags;
  };

  const transformRawSubtagsList = (tags) => {
    let transformedTags = [];
    for (let tag of tags) {
      if (Object.keys(tag.tag).length === 0) {
        transformedTags.push({ value: "-1", label: "" });
      } else {
        transformedTags.push({ value: tag.tag.id, label: tag.tag.tag_name });
      }
    }
    return transformedTags;
  };

  const areFiltersSelected = () => {
    let filtersSelected = false;
    if (
      categoryInLevel1 !== "-1" ||
      categoryInLevel2 !== "-1" ||
      categoryInLevel3 !== "-1"
    ) {
      filtersSelected = true;
    }

    const leftSideCheckboxChecked = leftSideCheckboxRef.current.checked;
    const rightSideCheckboxChecked = rightSideCheckboxRef.current.checked;
    const otherCheckboxChecked = otherCheckboxRef.current.checked;
    const tenorCheckboxChecked = tenorClefCheckboxRef.current.checked;
    const trebleCheckboxChecked = trebleClefCheckboxRef.current.checked;
    if (
      leftSideCheckboxChecked ||
      rightSideCheckboxChecked ||
      otherCheckboxChecked ||
      tenorCheckboxChecked ||
      trebleCheckboxChecked
    ) {
      filtersSelected = true;
    }
    return filtersSelected;
  };

  const handleCategory1SelectChange = (selectedOption) => {
    if (selectedOption === null) {
      return
    }

    const tagId = selectedOption.value;
    setCategoryInlevel1(tagId);

    // Reset Dependent Subtags
    setLevel2Tags([]);
    setLevel3Tags([]);
    setCategoryInlevel2("-1");
    setCategoryInlevel3("-1");

    // Get Subtags
    getLevel2Tags(tagId);
  };

  const handleCategory2SelectChange = (selectedOption) => {
    const tagId = selectedOption.value;
    setCategoryInlevel2(tagId);

    // Reset Dependent Subtag
    setLevel3Tags([]);
    setCategoryInlevel3("-1");

    // Get Subtags
    getLevel3Tags(tagId);
  };

  const handleCategory3SelectChange = (selectedOption) => {
    setCategoryInlevel3(selectedOption.value);
  };

  const handleApplyFiltersButtonClick = (e) => {
    let tags = {};
    if (categoryInLevel1 !== "-1") {
      tags["tag1"] = categoryInLevel1;
    }
    if (categoryInLevel2 !== "-1") {
      tags["tag2"] = categoryInLevel2;
    }
    if (categoryInLevel3 !== "-1") {
      tags["tag3"] = categoryInLevel3;
    }

    let sides = [];
    if (leftSideCheckboxRef.current.checked) {
      sides.push("left");
    }
    if (rightSideCheckboxRef.current.checked) {
      sides.push("right");
    }
    if (otherCheckboxRef.current.checked) {
      sides.push("other");
    }

    let clefs = [];
    if (tenorClefCheckboxRef.current.checked) {
      clefs.push("tenor");
    }
    if (trebleClefCheckboxRef.current.checked) {
      clefs.push("treble");
    }

    if (!areFiltersSelected()) {
      setFiltersApplied(false);
    } else {
      setFiltersApplied(true);
    }

    setSelectedTags(tags);
    setSelectedSides(sides);
    setSelectedClefs(clefs);
    setSearchString(currSearchString);
  };

  const handleClearFiltersButtonClick = () => {
    setFiltersApplied(false);
    level1TagSelectRef.current.clearValue()
    leftSideCheckboxRef.current.checked = false;
    rightSideCheckboxRef.current.checked = false;
    otherCheckboxRef.current.checked = false;
    tenorClefCheckboxRef.current.checked = false;
    trebleClefCheckboxRef.current.checked = false;
    setLevel2Tags([]);
    setLevel3Tags([]);
    setCategoryInlevel1("-1");
    setCategoryInlevel2("-1");
    setCategoryInlevel3("-1");
    setSelectedTags({});
    setSelectedSides([]);
    setSelectedClefs([]);
  };

  return (
    <div
      className="filter-bar-container"
      style={{ backgroundColor: overrideBackgroundColor }}
    >
      <h2 className="filter-title">Filter</h2>
      <div className="inputs-container">
        <div className="side-inputs-container">
          <h3 className="side-inputs-container-title">Left Side/Right Side</h3>
          <div className="side-inputs-container-input-label-container">
            <input type="checkbox" ref={leftSideCheckboxRef}></input>
            <p>Left Side</p>
          </div>
          <div className="side-inputs-container-input-label-container">
            <input type="checkbox" ref={rightSideCheckboxRef}></input>
            <p>Right Side</p>
          </div>
          <div className="side-inputs-container-input-label-container">
            <input type="checkbox" ref={otherCheckboxRef}></input>
            <p>Other</p>
          </div>
        </div>
        <div className="tag-levels-inputs-container">
          <h3 className="tag-levels-inputs-container-title">Categories</h3>
          <div className="tag-levels-inputs-container-select-label-container">
            <p>Category 1</p>
            <div className="tag-levels-inputs-container-select-container">
              <Select
                options={level1Tags}
                onChange={handleCategory1SelectChange}
                styles={selectStyles}
                ref={level1TagSelectRef}
              />
            </div>
          </div>
          {level2Tags.length !== 0 && (
            <div className="tag-levels-inputs-container-select-label-container">
              <p>Category 2</p>
              <div className="tag-levels-inputs-container-select-container">
                <Select
                  options={level2Tags}
                  onChange={handleCategory2SelectChange}
                  styles={selectStyles}
                  ref={level2TagSelectRef}
                />
              </div>
            </div>
          )}
          {level3Tags.length !== 0 && (
            <div className="tag-levels-inputs-container-select-label-container">
              <p>Category 3</p>
              <div className="tag-levels-inputs-container-select-container">
                <Select
                  options={level3Tags}
                  onChange={handleCategory3SelectChange}
                  styles={selectStyles}
                  ref={level3TagSelectRef}
                />
              </div>
            </div>
          )}
        </div>
        <div className="clef-inputs-container">
          <h3 className="clef-inputs-container-title">Clef</h3>
          <div className="clef-inputs-container-input-label-container">
            <input type="checkbox" ref={tenorClefCheckboxRef}></input>
            <p>Tenor</p>
          </div>
          <div className="clef-inputs-container-input-label-container">
            <input type="checkbox" ref={trebleClefCheckboxRef}></input>
            <p>Treble</p>
          </div>
        </div>
      </div>
      <div className="filter-buttons-container">
        <button
          className="apply-filters-button"
          onClick={(e) => handleApplyFiltersButtonClick(e)}
        >
          Apply Filters
        </button>
        {filtersApplied && (
          <button
            className="clear-filters-button"
            onClick={(e) => handleClearFiltersButtonClick(e)}
          >
            Clear Filters
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
