import React, { useEffect } from "react";
import "./Tabs.css";
import { useState } from "react";
import ExerciseList from "./ExerciseList"; // For approved TODO: Replace with requested if implemented
import { getAllApprovedRequests, getAllRequests } from "../api/requests";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  const [requestedExercise, setReqExercise] = useState([]);
  const [approvedExercise, setApvdExercise] = useState([]);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    // TODO: replace with api for requested
    getAllRequests(setReqExercise);
  }, []);

  useEffect(() => {
    // TODO: replace with api for requested
    getAllApprovedRequests(setApvdExercise);
  }, []);

  return (
    <div className="requests-tab-main-container">
      <div className="tab-container">
        <div className="tab-blks">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Requested
          </button>

          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Approved
          </button>
        </div>
      </div>
      <div className="tabs-item-container">
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <div>
            {/* TODO: get requested exercises using api & build components for mapping it out (or use ExerciseList if applicable)*/}
            <ExerciseList exercises={requestedExercise} requested={true} />
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          <div>
            {/* TODO: get approved exercises using api & build components for mapping it out (or use ExerciseList if applicable)*/}
            <ExerciseList exercises={approvedExercise} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
