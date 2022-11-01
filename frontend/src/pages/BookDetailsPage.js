import React from 'react'
import "../App.css"
import "./BookDetailsPage.css"
import { Link } from "react-router-dom";
import ExerciseList from '../components/ExerciseList';

const BookDetailsPage = () => {
  // TODO: Load Exercises using api, this is mock data
  const exercises = [{book:{title:"BookName", author:"Bach", date:"1900"}, page_and_exercise:"pg. 10 Exercise 1"}];  // Import data here, remove the test data
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
                        <div>

                        </div>
                    </h2>
                </div>
                <div className="bookDetails-filter-container">
                    {/* TODO Add filter component here */}
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