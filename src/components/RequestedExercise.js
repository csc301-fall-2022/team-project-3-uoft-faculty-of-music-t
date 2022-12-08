import React, { useEffect, useState } from "react";
import "./RequestedExercise.css";

const RequestedExercise = ({ reqExercise }) => {
  return (
    <div className="template-main-container">
      <form className="template-form">
        <div className="exercise-title">
          <label className="label_left">Exercise Title & Page</label>
        </div>
        <div className="exercise-link">
          <label className="label_left">Link</label>
        </div>
        <div className="exercise-side">
          <label className="label_left">Side</label>
        </div>
        <div className="exercise-levels">
          <label className="label_left">Tags</label>
        </div>
        <div className="exercise-clef">
          <label className="label_left">Clef</label>
        </div>
      </form>
    </div>
  );
};

export default RequestedExercise;
