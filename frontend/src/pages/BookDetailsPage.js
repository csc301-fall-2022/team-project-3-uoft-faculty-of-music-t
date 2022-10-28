import React from 'react'
import "../App.css"
import "./BookDetailsPage.css"
import { Link } from "react-router-dom";

const BookDetailsPage = () => {
  return (
    <div className="bookDetailsPage">
        <div className="title-container">
            <Link to="/" className="title-link"><h1 className="title">Cello Exercise Index</h1></Link>
        </div>
        <div className="bookDetails-main-container">
            <div className="bookDetails-top-container">
                <div className="bookDetails-content-container">
                    <h2 className="bookDetails-content-container-title">Book Details</h2>
                </div>
                <div className="bookDetails-filter-container">
                    {/* TODO Add filter component here */}
                </div>
            </div>
            <div className="bookDetails-exercises-container">
                <h2 className="bookDetails-exercises-container-title">Exercises</h2>
                <div className="bookDetails-exercises-list-container">

                </div>
            </div>
        </div>
    </div>
  )
}

export default BookDetailsPage