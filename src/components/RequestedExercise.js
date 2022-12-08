import React, { useEffect, useState } from "react";
import "./RequestedExercise.css";

const RequestedExercise = ({ reqExercise }) => {
  console.log(reqExercise);
  return (
    <div className="detail-main-container">
      <form className="detail-form">
        <div className="reqexercise-title">
          <label className="req_label_left">Exercise Title & Page</label>
          <div className="req_text">{reqExercise["page_and_exercise"]}</div>
        </div>
        <div className="reqexercise-link">
          <label className="req_label_left">Link</label>
          <div className="req_text">{reqExercise["book"]["link"]}</div>
        </div>
        <div className="reqexercise-side">
          <label className="req_label_left">Side</label>
          <div className="req_text">{reqExercise["side"]}</div>
        </div>
        <div className="reqexercise-levels">
          <label className="req_label_left">Tags</label>
          <div className="req_text">{reqExercise["page_and_exercise"]}</div>
        </div>
        <div className="reqexercise-clef">
          <label className="req_label_left">Clef</label>
          <div className="req_text">{reqExercise["page_and_exercise"]}</div>
        </div>
      </form>
    </div>
  );
};

export default RequestedExercise;
