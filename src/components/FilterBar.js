import React, { useState, useEffect, useRef } from "react";
import "./FilterBar.css";
import { getTagsByLevel, getSubTagsByTag } from "../api/requests";

const FilterBar = () => {
  const level1TagSelectRef = useRef();
  const level2TagSelectRef = useRef();
  const level3TagSelectRef = useRef();
  const [level1Tags, setLevel1Tags] = useState([]);
  const [level2Tags, setLevel2Tags] = useState([]);
  const [level3Tags, setLevel3Tags] = useState([]);
  const [categoryInLevel1, setCategoryInlevel1] = useState("");
  const [categoryInLevel2, setCategoryInlevel2] = useState("");
  const [categoryInLevel3, setCategoryInlevel3] = useState("");

  // DEFAULT
  useEffect(() => {
    getTagsByLevel(1).then((tags) => {
      tags.unshift({});
      setLevel1Tags(tags);
    });
  }, []);

  const handleCategory1SelectChange = (e) => {
    e.preventDefault();
    const tagId = level1TagSelectRef.current.value;
    if (tagId === "-1") {
      setLevel2Tags([]);
      setLevel3Tags([]);
      return;
    }
    setCategoryInlevel1(tagId);

    getSubTagsByTag(tagId).then((tags) => {
      tags.unshift({ tag: {} });
      setLevel2Tags(tags);
    });
  };

  const handleCategory2SelectChange = (e) => {
    e.preventDefault();
    const tagId = level2TagSelectRef.current.value;
    if (tagId === "-1") {
      setLevel3Tags([]);
      return;
    }
    setCategoryInlevel2(tagId);

    getSubTagsByTag(tagId).then((tags) => {
      tags.unshift({ tag: {} });
      setLevel3Tags(tags);
    });
  };

  const handleCategory3SelectChange = (e) => {
    e.preventDefault();
    setCategoryInlevel3(level3TagSelectRef.current.value);
  };

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
          <h3 className="tag-levels-inputs-container-title">Categories</h3>
          <div className="tag-levels-inputs-container-select-label-container">
            <p>Category 1</p>
            <select
              ref={level1TagSelectRef}
              onChange={(e) => handleCategory1SelectChange(e)}
            >
              {level1Tags.map((tag) => {
                if (Object.keys(tag).length === 0) {
                  return <option value="-1"></option>;
                } else {
                  return <option value={tag.id}>{tag.tag_name}</option>;
                }
              })}
            </select>
          </div>
          {level2Tags.length !== 0 && (
            <div className="tag-levels-inputs-container-select-label-container">
              <p>Category 2</p>
              <select
                ref={level2TagSelectRef}
                onChange={(e) => handleCategory2SelectChange(e)}
              >
                {level2Tags.length !== 0 &&
                  level2Tags.map((tag, index) => {
                    if (Object.keys(tag.tag).length === 0) {
                      return <option value="-1"></option>;
                    } else {
                      return (
                        <option value={tag.tag.id}>{tag.tag.tag_name}</option>
                      );
                    }
                  })}
              </select>
            </div>
          )}
          {level3Tags.length !== 0 && (
            <div className="tag-levels-inputs-container-select-label-container">
              <p>Category 3</p>
              <select
                ref={level3TagSelectRef}
                onChange={(e) => handleCategory3SelectChange(e)}
              >
                {level3Tags.map((tag, index) => {
                  if (Object.keys(tag.tag).length === 0) {
                    return <option value="-1"></option>;
                  } else {
                    return (
                      <option value={tag.tag.id}>{tag.tag.tag_name}</option>
                    );
                  }
                })}
              </select>
            </div>
          )}
        </div>
        <div className="clef-inputs-container">
          <h3 className="clef-inputs-container-title">Clef</h3>
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
  );
};

export default FilterBar;
