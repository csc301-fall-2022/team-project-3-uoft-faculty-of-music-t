import React from "react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { adminLogin } from "../api/requests";

const Login = () => {
  const userRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    adminLogin({ username: user, password: pwd }, setSuccess);
    setUser("");
    setPwd("");
    // need to add some display showing "try again"
  };

  return (
    <>
      {success ? (
        <div>
          <h1>You are logged in!</h1>
          <div className="go-to-admin">
            <Link to="/requested" className="admin-link">
              Go to the admin page
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              className="login-input"
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              className="login-input"
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button className="login-button">Login</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
