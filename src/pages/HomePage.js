import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import "./HomePage.css";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import ExerciseList from "../components/ExerciseList";
import BooksList from "../components/BooksList";
import TopicList from "../components/TopicList";
import { getAllBooks, getAllTags, getRandomExercises } from "../api/requests";
import { useNavigate } from "react-router";
import ReactPaginate from "react-paginate";
import SearchContext from "../contexts/SearchContext";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [topics, setTopics] = useState([]);
  const [randomExercises, setRandomExercises] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true);

  let { searchString, setSearchString } = useContext(SearchContext);

  const naviagte = useNavigate();

  const numRandomExercises = 3; // number of random exercies to show
  useEffect(() => {
    getAllBooks(setBooks);
    getAllTags(setTopics);
    getRandomExercises(setRandomExercises, numRandomExercises);
  }, []);

  useEffect(() => {
    if (firstLoad) {
      // Prevents navigation back to search page, when navigated from search page
      setFirstLoad(false);
      return;
    }
    if (searchString !== "") {
      naviagte("/search");
    }
  }, [searchString]);

  const [pageNumber, setPageNumber] = useState(0);
  const bookPerPage = 10; // number of books per page.
  const pagesVisited = pageNumber * bookPerPage;

  const displayBooks = books.slice(pagesVisited, pagesVisited + bookPerPage);

  const pageCount = Math.ceil(books.length / bookPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

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
            <BooksList books={displayBooks} />
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"hp-pagination-container"}
              activeClassName={"hp-active-container"}
            />
          </div>
          <div className="content-list-container-divider"></div>
          <div className="browse-by-topic-list-container">
            <h2>Browse By Topic</h2>
            <TopicList topics={topics} />
          </div>
        </div>
        <div className="random-exercises-container">
          <h2>Try These Exercises!</h2>
          <div className="random-exercises-list-container">
            <ExerciseList
              exercises={randomExercises}
              excludeBookTitle={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
