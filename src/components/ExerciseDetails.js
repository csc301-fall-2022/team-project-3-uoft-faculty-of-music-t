import React from "react";
import { useNavigate } from "react-router";
import "./ExerciseDetails.css";
// import { Link } from 'react-router-dom';

export default function ExerciseDetails({ exercisedet }) {
  const handleButtonClick = (e) => {
    e.preventDefault();
    window.location.href = exercisedet.book.link;
  };

  const navigate = useNavigate();

  console.log(exercisedet);

  return (
    <div className="exercisedet-container">
      <div className="exercisedet-container-labels">
        <p>
          <span>Exercise Page and Name: </span> {exercisedet.page_and_exercise}
        </p>
        <p>
          <span>Side: </span>
          {exercisedet.side}
        </p>
        <p>
          <span>Book Name: </span>
          {exercisedet.book.title}
        </p>
        <p>
          <span>Author: </span>
          {exercisedet.book.author}
        </p>
        <p>
          <span>Date: </span>
          {exercisedet.book.date}
        </p>
        {exercisedet.tenor && <p>Tenor: Yes</p>}
        {!exercisedet.tenor && <p>Tenor: No</p>}
        {exercisedet.treble && <p>Treble: Yes</p>}
        {!exercisedet.treble && <p>Treble: No</p>}
      </div>
      <div className="exerciseDetails-content-buttons">
        <button
          className="view-book-button"
          onClick={(e) => handleButtonClick(e)}
        >
          View the Book
        </button>
        <button
          className="edit-exercise-button"
          onClick={(e) =>
            navigate("/editExercise", {
              state: {
                exercisedet: exercisedet,
              },
            })
          }
        >
          Request to Edit This Exercise
        </button>
      </div>
    </div>
  );
}
