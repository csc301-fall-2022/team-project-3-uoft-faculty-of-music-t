import React from 'react'
import "../App.css"
import "./HomePage.css"
import SearchBar from '../components/SearchBar'
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homePage">
        <div className="title-container">
            <Link to="/" className="title-link"><h1 className="title">Cello Exercise Index</h1></Link>
        </div>
        <div className="homePage-main-container">
            <SearchBar />
            <div className="content-list-container">
                <div className="books-list-container">
                    <h2>Books</h2>
                </div>
                <div className="content-list-container-divider">
                </div>
                <div className="browse-by-topic-list-container">
                    <h2>Browse By Topic</h2>
                </div>
            </div>
            <div className="random-exercises-container">
                <h2>Try These Exercises!</h2>
                <div className="random-exercises-list-container">

                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage