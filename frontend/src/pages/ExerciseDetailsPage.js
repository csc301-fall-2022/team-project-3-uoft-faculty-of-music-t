import React from 'react'
import "../App.css"
import "./ExerciseDetailsPage.css"
import ExerciseInfo from '../components/ExerciseInfo';
import { Link } from "react-router-dom";

const ExerciseDetailsPage = () => {
  // TODO: Load Exercise details using api, this is test data
  const exercisedetails = [{book:{title:"BookName", author:"Bach", date:"1900", link:"https://imslp.org/wiki/Nouvelle_m%C3%A9thode_de_violoncelle_(Abbiate%2C_Louis)"}, page_and_exercise:"pg. 10 Exercise 1", side:"Right side", tenor:false, treble:false}];

  return (
    <div className="exerciseDetailsPage">
        <div className="title-container">
            <Link to="/" className="title-link"><h1 className="title">Cello Exercise Index</h1></Link>
        </div>
        <div className="exerciseDetails-main-container">
            <div className="exerciseDetails-content-container">
                <h2 className="exerciseDetails-content-title">
                    Exercise Details
                    <div className="exerciseDetails-content">
                        <ExerciseInfo exercisedetails={exercisedetails}/>
                    </div>
                </h2>
                <div className="exerciseDetails-content-buttons">
                    <Link to='/bookDetails'>
                        <button className="view-book-button">View the Book</button>
                    </Link>
                    <button className="edit-exercise-button">Request to Edit This Exercise</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExerciseDetailsPage