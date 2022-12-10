import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./Logout.css";

function Logout() {
  const [toLogout, setToLogout] = useState(false);

  if (toLogout) {
    localStorage.removeItem("admin");
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <button
        className="logout-button"
        onClick={() => {
          setToLogout(true);
        }}
      >
        {" "}
        Logout{" "}
      </button>
    </div>
  );
}

export default Logout;
