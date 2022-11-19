import React, { useState, useEffect } from 'react'
import "../App.css"
import "./SearchPage.css"
import SearchBar from '../components/SearchBar'
import { Link } from "react-router-dom";
import ExerciseList from '../components/ExerciseList';
import { getAllExercises } from '../api/requests';

const SearchPage = () => {
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    getAllExercises(setExercises);
  }, [])

  return (
    <div className="searchPage">
        <div className="title-container">
            <Link to="/" className="title-link"><h1 className="title">Cello Exercise Index</h1></Link>
        </div>
        <div className="searchPage-main-container">
            {/* Replace SearchBar with SearchBarWithFilter */}
            <SearchBar />
            <div className="content-list-container">
              <ExerciseList exercises={exercises}/>
            </div>
        </div>
    </div>
  )
}

export default SearchPage