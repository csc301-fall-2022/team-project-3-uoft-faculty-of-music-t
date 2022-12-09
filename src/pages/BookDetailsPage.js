import React, {useState, useEffect} from 'react'
import "../App.css"
import "./BookDetailsPage.css"
import { Link, useLocation } from "react-router-dom";
import BookInfo from '../components/BookInfo';
import ExerciseList from '../components/ExerciseList';
import FilterBar from "../components/FilterBar"
import { getBookDetails, getExerciseByBook, getExerciseByFiltersOrSearch, getExerciseByPaginationUrl } from '../api/requests';
import ReactPaginate from 'react-paginate';

function BookDetailsPage() {
  const location = useLocation();
  const { id } = location.state;
  const [bookDetails, setBookDetails] = useState({});

  useEffect(() => {
    getBookDetails(setBookDetails, id);
  }, [id])

  const [exercises, setExercises] = useState([])
  const [exercisesPaginationNextUrl, setExercisesPaginationNextUrl] = useState("")
  const [selectedTags, setSelectedTags] = useState({})
  const [selectedClefs, setSelectedClefs] = useState([])
  const [selectedSides, setSelectedSides] = useState([])

  useEffect(() => {
    getExerciseByBook(setExercises, id);
  }, [id])
  
  useEffect(() => {
    if (Object.keys(selectedTags).length === 0 && selectedClefs.length === 0 && selectedSides.length === 0) {
        getExerciseByBook(setExercises, id, setExercisesPaginationNextUrl);
    } else {
        getExerciseByFiltersOrSearch(setExercises, selectedTags, null, selectedSides, selectedClefs, id, setExercisesPaginationNextUrl)
    }
  }, [selectedTags, selectedClefs, selectedSides]) 

  const handleExercisesListScroll = (e) => {
    const bottom = Math.abs(e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight) <= 10
    if (bottom) {
      getExerciseByPaginationUrl(exercises, setExercises, exercisesPaginationNextUrl, setExercisesPaginationNextUrl)
    }
  }


  return (
    <div className="bookDetailsPage">
        <div className="title-container">
            <Link to="/" className="title-link"><h1 className="title">Cello Exercise Index</h1></Link>
        </div>
        <div className="bookDetails-main-container">
            <div className="bookDetails-top-container">
                <div className="bookDetails-content-container">
                    <h2 className="bookDetails-content-container-title">
                        Book Details
                        <div className='bookDetails-content'>
                            <BookInfo bookdetails={[bookDetails]}/>
                        </div>
                    </h2>
                </div>
                <div className="bookDetails-filter-container">
                    <FilterBar setSelectedTags={setSelectedTags} setSelectedClefs={setSelectedClefs} setSelectedSides={setSelectedSides}/>
                </div>
            </div>
            <div className="bookDetails-exercises-container">
                <h2>Exercises</h2>
                <div className="bookDetails-exercises-list-container" onScroll={(e) => {handleExercisesListScroll(e)}}>
                    <ExerciseList exercises={exercises} excludeBookTitle={true}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookDetailsPage
