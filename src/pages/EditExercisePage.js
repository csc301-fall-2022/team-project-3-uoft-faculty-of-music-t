import React from "react";
import "../App.css";
import "./EditExercisePage.css";
import ExerciseTemplate from "../components/ExerciseTemplate";
import { Link, useLocation, useNavigate } from "react-router-dom";

const EditExercisePage = () => {
  const location = useLocation();
  const exercisedet = location.state.exercisedet;
  // console.log(exercisedet);

  return (
    <div className="editExercisePage">
      <div className="title-container">
        <Link to="/" className="title-link">
          <h1 className="title">Cello Exercise Index</h1>
        </Link>
      </div>
      <div className="editExercise-main-container">
        <div className="editExercise-content-container">
          <h2 className="editExercise-content-title">
            Request to Edit Exercise
          </h2>
          <div className="editExercise-content">
            <ExerciseTemplate exercisedet={exercisedet}></ExerciseTemplate>
          </div>
        </div>
        <div className="editExercise-buttons">
          <button className="request-btn">Request the Edit</button>
          <Link
            className="back-btn"
            to="/exerciseDetails"
            state={{ exercise: exercisedet }}
          >
            <p>Back</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditExercisePage;
