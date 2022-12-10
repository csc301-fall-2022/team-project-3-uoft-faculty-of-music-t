import React from "react";
import "../App.css";
import "./RequestsPage.css";
import Logout from "../components/Logout"
import Tabs from "../components/Tabs";
import { Link } from "react-router-dom";

function AdminPage() {
  return (
    <div className="requestsPage">
      <div className="title-container">
        <Link to="/" className="title-link">
          <h1 className="title">Cello Exercise Index</h1>
        </Link>
        <h2 className="requests-welcome">Hello, Admin!</h2>
        <Logout />
      </div>
      <Tabs />
    </div>
  );
}

export default AdminPage;
