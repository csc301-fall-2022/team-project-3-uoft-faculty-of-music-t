import "../App.css"
import "./LoginPage.css"
import { Link } from "react-router-dom"
import React from 'react'

function LoginPage() {
  return (
    <div className="loginPage">
        <div className="loginPage-main-container">
            <div className="login-title-container">
                <Link to="/" className="title-link">
                    <h1 className="lp-title">Cello Exercise Index</h1>
                </Link>
            </div>
            <div className="login-field-container">
                Login Fields
            </div>
        </div>
    </div>
  )
}

export default LoginPage
