import React from "react";
import "../App.css";
import "./RequestDetailPage.css";
import RequestedExercise from "../components/RequestedExercise";
import { Link, useLocation, useNavigate } from "react-router-dom";

const RequestDetailPage = () => {
  const location = useLocation();

  return (
    <div className="requestDetailPage">
      <div className="title-container">
        <Link to="/" className="title-link">
          <h1 className="title">Cello Exercise Index</h1>
        </Link>
      </div>
      <div className="requestDetail-main-container">
        <div className="requestDetail-content-container">
          <h2 className="requestDetail-content-title">Detail about Request</h2>
          <div className="requestDetail-content">
            <RequestedExercise></RequestedExercise>
          </div>
        </div>
        <div className="requestDetail-buttons">
          <button className="approve-btn">Approve</button>
          <button className="decline-btn">Decline</button>
        </div>
      </div>
    </div>
  );
};

export default RequestDetailPage;
