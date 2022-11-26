import React, { useState, useEffect } from "react";
import "../App.css";
import "./HomePage.css";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import BooksList from "../components/BooksList";
import TopicList from "../components/TopicList";
import { getAllBooks, getAllTags } from "../api/requests";
import { useNavigate } from "react-router";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [topics, setTopics] = useState([]);
  const [searchString, setSearchString] = useState("");
  const naviagte = useNavigate();

  useEffect(() => {
    getAllBooks(setBooks);
    getAllTags(setTopics);
  }, []);

  useEffect(() => {
    if (searchString !== "") {
      naviagte("/search", {
        state: {
          searchString: searchString,
        },
      });
    }
  }, [searchString]);

  return (
    <div className="homePage">
      <div className="title-container">
        <Link to="/" className="title-link">
          <h1 className="title">Cello Exercise Index</h1>
        </Link>
      </div>
      <div className="homePage-main-container">
        <SearchBar setSearchString={setSearchString} />
        <div className="content-list-container">
          <div className="books-list-container">
            <h2>Books</h2>
            <BooksList books={books} />
          </div>
          <div className="content-list-container-divider"></div>
          <div className="browse-by-topic-list-container">
            <h2>Browse By Topic</h2>
            <TopicList topics={topics} />
          </div>
        </div>
        <div className="random-exercises-container">
          <h2>Try These Exercises!</h2>
          <div className="random-exercises-list-container"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
