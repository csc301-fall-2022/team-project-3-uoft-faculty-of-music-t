import React, {useState, useEffect} from 'react'
import "../App.css"
import "./BookDetailsPage.css"
import { Link, useLocation } from "react-router-dom";
import BookInfo from '../components/BookInfo';
import ExerciseList from '../components/ExerciseList';
import FilterBar from "../components/FilterBar"
import { getBookDetails, getExerciseByBook } from '../api/requests';

function BookDetailsPage() {
  const location = useLocation();
  const { id } = location.state;
  const [bookDetails, setBookDetails] = useState({});

  useEffect(() => {
    getBookDetails(setBookDetails, id);
  }, [id])

  const [exercises, setExercises] = useState([])

  useEffect(() => {
    getExerciseByBook(setExercises, id);
  }, [id])

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
                    <FilterBar/>
                </div>
            </div>
            <div className="bookDetails-exercises-container">
                <h2>Exercises</h2>
                {/* <h2 className="bookDetails-exercises-container-title">Exercises</h2> */}
                <div className="bookDetails-exercises-list-container">
                    <ExerciseList exercises={exercises}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookDetailsPage
