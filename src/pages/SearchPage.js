import React, { useState, useEffect } from 'react'
import "../App.css"
import "./SearchPage.css"
import SearchBar from '../components/SearchBar'
import { Link } from "react-router-dom";
import ExerciseList from '../components/ExerciseList';
import { getAllExercises } from '../api/requests';
import ReactPaginate from 'react-paginate';

const SearchPage = () => {
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    getAllExercises(setExercises);
  }, [])

  const [exPageNumber, setPageNumber] = useState(0);
  const exPerPage = 10;  // number of searched exercise per page.
  const exPageVisited = exPageNumber * exPerPage;

  const displaySearchExercises = exercises.slice(exPageVisited, exPageVisited + exPerPage);

  const exPageCount = Math.ceil(exercises.length / exPerPage);

  const changePage = ({selected}) => {
    setPageNumber(selected)
  };


  return (
    <div className="searchPage">
        <div className="title-container">
            <Link to="/" className="title-link"><h1 className="title">Cello Exercise Index</h1></Link>
        </div>
        <div className="searchPage-main-container">
            {/* Replace SearchBar with SearchBarWithFilter */}
            <SearchBar />
            <div className="sp-content-list-container">
              <ExerciseList exercises={displaySearchExercises}/>
              <ReactPaginate
                  pageCount={exPageCount}
                  onPageChange={changePage}
                  containerClassName={"sp-pagination-container"}
                  activeClassName={"sp-active-container"}
              />
            </div>
        </div>
    </div>
  )
}

export default SearchPage