import React, { useState } from "react";
import "./ExerciseTemplate.css";

// require the argument
const ExerciseTemplate = ({ exercisedet }) => {
  const [detail, setDetail] = useState(exercisedet);
  return (
    <div className="template-main-container">
      <form className="template-form">
        <div className="exercise-title">
          <label>Exercise Title & Page</label>
          <input
            type="text"
            value={detail.page_and_exercise}
            onChange={(e) => {
              setDetail({
                ...detail,
                page_and_exercise: e.target.value,
              });
            }}
          ></input>
        </div>
        <div className="exercise-side">
          <label>Side</label>
        </div>
        <div className="exercise-levels">
          <label>Levels</label>
        </div>
        <div className="exercise-clef">
          <label>Clef</label>
        </div>
        <div className="exercise-tags">
          <label>Tag</label>
          {/* List of tag icons */}
        </div>
      </form>
    </div>
  );
};

export default ExerciseTemplate;
