import React from 'react'
import "../App.css"
import "./ExerciseDetailsPage.css"
import { Link } from "react-router-dom";

const ExerciseDetailsPage = () => {
  return (
    <div className="exerciseDetailsPage">
        <div className="title-container">
            <Link to="/" className="title-link"><h1 className="title">Cello Exercise Index</h1></Link>
        </div>
        <div className="exerciseDetails-main-container">
            <div className="exerciseDetails-content-container">
                <h2 className="exerciseDetails-content-title">
                    Exercise Details
                </h2>
                <div className="exerciseDetails-content">

                </div>
                <div className="exerciseDetails-content-buttons">
                    <button className="view-book-button">View the Book</button>
                    <button className="edit-exercise-button">Request to Edit This Exercise</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExerciseDetailsPage