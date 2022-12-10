import React, { useEffect, useState } from "react";
import "../App.css";
import "./RequestDetailPage.css";
import RequestedExercise from "../components/RequestedExercise";
import { Link, useLocation } from "react-router-dom";
import { getExerciseDetails } from "../api/requests";

const RequestDetailPage = () => {
  const location = useLocation();
  const [original, setOriginal] = useState({});

  useEffect(() => {
    getExerciseDetails(setOriginal, location.state.exercise.exercise_id);
  }, []);

  return (
    <div className="requestDetailPage">
      <div className="title-container">
        <Link to="/" className="title-link">
          <h1 className="title">Cello Exercise Index</h1>
        </Link>
      </div>
      <div className="requestDetail-main-container">
        {original ? (
          <>
            <div className="requestDetail-content-container">
              <h2 className="requestDetail-content-title">
                Original Exercise Detail
              </h2>
              <div className="requestDetail-content">
                <RequestedExercise
                  reqExercise={original}
                  original={true}
                ></RequestedExercise>
              </div>
            </div>
            <div className="requestDetail-content-container">
              <h2 className="requestDetail-content-title">Request Detail</h2>
              <div className="requestDetail-content">
                <RequestedExercise
                  reqExercise={location.state.exercise}
                ></RequestedExercise>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="requestDetail-buttons">
        <button className="approve-btn">Approve</button>
        <button className="decline-btn">Decline</button>
      </div>
    </div>
  );
};

export default RequestDetailPage;
