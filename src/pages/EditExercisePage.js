import React, { useState } from "react";
import "../App.css";
import "./EditExercisePage.css";
import ExerciseTemplate from "../components/ExerciseTemplate";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { postNewRequest } from "../api/requests";

const EditExercisePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const exercisedet = location.state.exercisedet;
  const [detail, setDetail] = useState(exercisedet);
  const [msg, setMsg] = useState(false);

  const handleRequest = () => {
    const lstTags = Array.from(detail.tag, (tag) => tag.id);
    const req = {
      exercise_id: detail.id,
      new_side: detail.side,
      // need a list of ids, not list of json
      new_tags: `[${lstTags}]`,
      new_book_id: detail.book_id,
      new_page_and_exercise: detail.page_and_exercise,
      new_link: detail.book.link,
      new_tenor: detail.tenor ? "True" : "False",
      new_treble: detail.treble ? "True" : "False",
    };

    console.log(req);
    postNewRequest(req, navigate, setMsg);
  };

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
            {detail ? (
              <ExerciseTemplate
                detail={detail}
                setDetail={setDetail}
              ></ExerciseTemplate>
            ) : (
              <></>
            )}
          </div>
          <div className="req-message">
            {msg ? (
              <text>
                Failed to submit the request. Check if you made any mistake.
              </text>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="editExercise-buttons">
          <button className="request-btn" onClick={handleRequest}>
            Request the Edit
          </button>
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
