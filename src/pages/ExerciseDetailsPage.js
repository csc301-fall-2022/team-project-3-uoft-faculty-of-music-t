import React from 'react'
import "../App.css"
import "./ExerciseDetailsPage.css"
import ExerciseInfo from '../components/ExerciseInfo';
import { Link, useLocation } from "react-router-dom";

const ExerciseDetailsPage = () => {
  const location = useLocation()

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
                        <ExerciseInfo exercisedetails={location.state.exercise}/>
                    </div>
                </h2>
            </div>
        </div>
    </div>
  )
}

export default ExerciseDetailsPage