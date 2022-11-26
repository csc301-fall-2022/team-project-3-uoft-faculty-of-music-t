import React, { useState, useEffect } from 'react'
import "../App.css"
import "./SearchPage.css"
import SearchBar from '../components/SearchBar'
import SearchBarWithFilter from '../components/SearchBarWithFilter'
import { Link } from "react-router-dom";
import ExerciseList from '../components/ExerciseList';
import { getAllExercises, getExerciseByTags } from '../api/requests';

const SearchPage = () => {
  const [exercises, setExercises] = useState([])
  const [selectedTags, setSelectedTags] = useState({})

  useEffect(() => {
    getAllExercises(setExercises);
  }, [])

  useEffect(() => {
    if (Object.keys(selectedTags).length === 0) {
      getAllExercises(setExercises);
    } else {
      getExerciseByTags(setExercises, selectedTags);
    }
  }, [selectedTags])

  return (
    <div className="searchPage">
        <div className="title-container">
            <Link to="/" className="title-link"><h1 className="title">Cello Exercise Index</h1></Link>
        </div>
        <div className="searchPage-main-container">
            <SearchBarWithFilter setSelectedTags={setSelectedTags}/>
            <div className="content-list-container">
              <ExerciseList exercises={exercises}/>
            </div>
        </div>
    </div>
  )
}

export default SearchPage