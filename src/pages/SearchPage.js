import React, { useState, useEffect } from "react";
import "../App.css";
import "./SearchPage.css";
import SearchBarWithFilter from "../components/SearchBarWithFilter";
import { Link } from "react-router-dom";
import ExerciseList from "../components/ExerciseList";
import { getAllExercises, getExerciseByFiltersOrSearch } from "../api/requests";
import { useLocation } from "react-router-dom";

const SearchPage = () => {
  const location = useLocation();
  const [exercises, setExercises] = useState([]);
  const [searchString, setSearchString] = useState(location.state.searchString);
  const [selectedTags, setSelectedTags] = useState({});
  const [selectedClefs, setSelectedClefs] = useState([]);
  const [selectedSides, setSelectedSides] = useState([]);

  useEffect(() => {
    getAllExercises(setExercises);
  }, []);

  useEffect(() => {
    if (
      Object.keys(selectedTags).length === 0 &&
      selectedClefs.length === 0 &&
      selectedSides.length === 0 &&
      searchString === ""
    ) {
      getAllExercises(setExercises);
    } else {
      setExercises([]) // Flush out existing exercises in array <- for bug where exercises were still shown even though returned data was empty
      getExerciseByFiltersOrSearch(
        setExercises,
        selectedTags,
        searchString,
        selectedSides,
        selectedClefs
      );
    }
  }, [selectedTags, searchString, selectedSides, selectedClefs]);

  return (
    <div className="searchPage">
      <div className="title-container">
        <Link to="/" className="title-link">
          <h1 className="title">Cello Exercise Index</h1>
        </Link>
      </div>
      <div className="searchPage-main-container">
        <SearchBarWithFilter
          setSelectedTags={setSelectedTags}
          setSearchString={setSearchString}
          setSelectedClefs={setSelectedClefs}
          setSelectedSides={setSelectedSides}
          defaultSearchString={location.state.searchString}
        />
        <div className="content-list-container">
          <ExerciseList exercises={exercises} />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
