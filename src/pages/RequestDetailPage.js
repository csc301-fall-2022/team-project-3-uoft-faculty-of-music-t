import React, { useEffect, useState } from "react";
import "../App.css";
import "./RequestDetailPage.css";
import RequestedExercise from "../components/RequestedExercise";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  getExerciseDetails,
  approveRequest,
  rejectRequest,
} from "../api/requests";

const RequestDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [original, setOriginal] = useState({});
  const [msg, setMsg] = useState(false);

  useEffect(() => {
    getExerciseDetails(setOriginal, location.state.exercise.exercise_id);
  }, []);

  const handleApprove = (e) => {
    e.preventDefault();
    approveRequest(location.state.exercise.id, navigate, setMsg);
    if (msg) {
      alert("There is an error. Please try again:(");
    }
  };

  const handleReject = (e) => {
    e.preventDefault();
    rejectRequest(location.state.exercise.id, navigate, setMsg);
    if (msg) {
      alert("There is an error. Please try again:(");
    }
  };

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
                  original={false}
                ></RequestedExercise>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="requestDetail-buttons">
        <button className="approve-btn" onClick={(e) => handleApprove(e)}>
          Approve
        </button>
        <button className="decline-btn" onClick={(e) => handleReject(e)}>
          Decline
        </button>
      </div>
    </div>
  );
};

export default RequestDetailPage;
