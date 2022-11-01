import React from 'react'
import "../App.css"
import "./ExerciseDetailsPage.css"
import ExerciseInfo from '../components/ExerciseInfo';
import { Link } from "react-router-dom";

const ExerciseDetailsPage = () => {
  // TODO: Load Exercise details using api, this is mock data
  const exercisedetails = [{name:"Exercise 1", lrside:"Left Side", level1:"Ornamentations", level2:"Trills", clef:["Tenor"]}];

  return (
    <div className="exerciseDetailsPage">
        <div className="title-container">
            <Link to="/" className="title-link"><h1 className="title">Cello Exercise Index</h1></Link>
        </div>
        <div className="exerciseDetails-main-container">
            <div className="exerciseDetails-content-container">
                <h2 className="exerciseDetails-content-title">
                    Exercise Details
                    <div>
                        <ExerciseInfo exercisedetails={exercisedetails}/>
                    </div>
                </h2>
                <div className="exerciseDetails-content">

                </div>
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