import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import "./SearchPage.css";
import SearchBarWithFilter from "../components/SearchBarWithFilter";
import { Link } from "react-router-dom";
import BooksList from "../components/BooksList";
import ExerciseList from "../components/ExerciseList";
import { getAllBooks, getBooksBySearch, getAllExercises, getExerciseByFiltersOrSearch, getExerciseByPaginationUrl } from "../api/requests";
import SearchContext from "../contexts/SearchContext";

const SearchPage = () => {
  const [books, setBooks] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [exercisesPaginationNextUrl, setExercisesPaginationNextUrl] = useState("")
  const [selectedTags, setSelectedTags] = useState({});
  const [selectedClefs, setSelectedClefs] = useState([]);
  const [selectedSides, setSelectedSides] = useState([]);

  let {searchString, setSearchString} = useContext(SearchContext)

  useEffect(() => {
    if (
      Object.keys(selectedTags).length === 0 &&
      selectedClefs.length === 0 &&
      selectedSides.length === 0 &&
      searchString === ""
    ) {
      getAllBooks(setBooks)
      getAllExercises(setExercises, setExercisesPaginationNextUrl);
    } else {
      setExercises([]); // Flush out existing exercises in array <- for bug where exercises were still shown even though returned data was empty
      setBooks([]);
      getExerciseByFiltersOrSearch(
        setExercises,
        selectedTags,
        searchString,
        selectedSides,
        selectedClefs,
        null,
        setExercisesPaginationNextUrl
      );
      getBooksBySearch(setBooks, searchString)
    }
  }, [selectedTags, searchString, selectedSides, selectedClefs]);

  const handleExercisesListScroll = (e) => {
    const bottom = Math.abs(e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight) <= 10
    if (bottom) {
      getExerciseByPaginationUrl(exercises, setExercises, exercisesPaginationNextUrl, setExercisesPaginationNextUrl)
    }
  }

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
          defaultSearchString={searchString}
        />
        <h2>Books</h2>
        <div className="sp-books-list-container">
          <BooksList books={books}/>
        </div>
        <h2>Exercises</h2>
        <div className="sp-exercises-list-container" onScroll={(e) => handleExercisesListScroll(e)}>
          <ExerciseList exercises={exercises} />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
