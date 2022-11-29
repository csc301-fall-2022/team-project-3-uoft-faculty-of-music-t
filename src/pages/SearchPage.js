import React, { useState, useEffect } from "react";
import "../App.css";
import "./SearchPage.css";
import SearchBarWithFilter from "../components/SearchBarWithFilter";
import { Link } from "react-router-dom";
import ExerciseList from "../components/ExerciseList";
import { getAllExercises, getExerciseByFiltersOrSearch } from "../api/requests";
import { useLocation } from "react-router-dom";
import ReactPaginate from "react-paginate";

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
      setExercises([]); // Flush out existing exercises in array <- for bug where exercises were still shown even though returned data was empty
      getExerciseByFiltersOrSearch(
        setExercises,
        selectedTags,
        searchString,
        selectedSides,
        selectedClefs
      );
    }
  }, [selectedTags, searchString, selectedSides, selectedClefs]);

  const [exPageNumber, setPageNumber] = useState(0);
  const exPerPage = 10; // number of searched exercise per page.
  const exPageVisited = exPageNumber * exPerPage;

  const displaySearchExercises = exercises.slice(
    exPageVisited,
    exPageVisited + exPerPage
  );

  const exPageCount = Math.ceil(exercises.length / exPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

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
        <div className="sp-content-list-container">
          <ExerciseList exercises={displaySearchExercises} />
          <ReactPaginate
            pageCount={exPageCount}
            onPageChange={changePage}
            containerClassName={"sp-pagination-container"}
            activeClassName={"sp-active-container"}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
