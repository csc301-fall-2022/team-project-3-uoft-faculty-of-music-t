import React, {useState, useEffect} from 'react'
import "../App.css"
import "./BookDetailsPage.css"
import { Link, useLocation } from "react-router-dom";
import BookInfo from '../components/BookInfo';
import ExerciseList from '../components/ExerciseList';
import FilterBar from "../components/FilterBar"
import { getBookDetails, getExerciseByBook, getExerciseByFiltersOrSearch } from '../api/requests';
import ReactPaginate from 'react-paginate';

function BookDetailsPage() {
  const location = useLocation();
  const { id } = location.state;
  const [bookDetails, setBookDetails] = useState({});
  const [pageNumber, setPageNumber] = useState(0); 

  useEffect(() => {
    getBookDetails(setBookDetails, id);
  }, [id])

  const [exercises, setExercises] = useState([])
  const [selectedTags, setSelectedTags] = useState({})
  const [selectedClefs, setSelectedClefs] = useState([])
  const [selectedSides, setSelectedSides] = useState([])

  useEffect(() => {
    getExerciseByBook(setExercises, id);
  }, [id])
  
  useEffect(() => {
    if (Object.keys(selectedTags).length === 0 && selectedClefs.length === 0 && selectedSides.length === 0) {
        getExerciseByBook(setExercises, id);
    } else {
        getExerciseByFiltersOrSearch(setExercises, selectedTags, null, selectedSides, selectedClefs, id)
    }
  }, [selectedTags, selectedClefs, selectedSides]) 

  const exercisePerPage = 10;  // number of exercises per page
  const pagesVisited = pageNumber * exercisePerPage;  // use this slice the exercises

  const displayExercises = exercises.slice(pagesVisited, pagesVisited + exercisePerPage) // decide exercises to be load on each page

  const pageCount = Math.ceil(exercises.length / exercisePerPage);  // Calculate how many pages are needed

  const changePage = ({selected}) => {
    setPageNumber(selected)  // Change page 
  };

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
                <div className="bookDetails-exercises-list-container">
                    <ExerciseList exercises={displayExercises} excludeBookTitle={true}/>
                    <ReactPaginate
                        previousLabel={"Previous"} 
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"pagination-container"}
                        activeClassName={"active-container"}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookDetailsPage
