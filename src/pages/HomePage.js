import React, { useState, useEffect } from "react";
import "../App.css";
import "./HomePage.css";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import BooksList from "../components/BooksList";
import TopicList from "../components/TopicList";
import ExerciseList from "../components/ExerciseList";
import { getAllBooks, getAllTags, getRandomExercises } from "../api/requests";
import { useNavigate } from "react-router";
import ReactPaginate from "react-paginate";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [topics, setTopics] = useState([]);
  const [randomExercises, setRandomExercises] = useState([]);
  const [searchString, setSearchString] = useState("");
  const navigate = useNavigate();

  const numRandomExercises = 3; // number of random exercies to show
  useEffect(() => {
    getAllBooks(setBooks);
    getAllTags(setTopics);
    getRandomExercises(setRandomExercises, numRandomExercises);
  }, []);

  useEffect(() => {
    if (searchString !== "") {
      navigate("/search", {
        state: {
          searchString: searchString,
        },
      });
    }
  }, [navigate, searchString]);

  const [pageNumber, setPageNumber] = useState(0);
  const [topicPageNumber, setTopicPageNumber] = useState(0);
  const bookPerPage = 10; // number of books per page.
  const topicPerPage = 10; // number of topics per page.
  const pagesVisited = pageNumber * bookPerPage;
  const topicPagesVisited = topicPageNumber * topicPerPage;

  const displayBooks = books.slice(pagesVisited, pagesVisited + bookPerPage);
  const displayTopics = topics.slice(
    topicPagesVisited,
    topicPagesVisited + topicPerPage
  );

  const pageCount = Math.ceil(books.length / bookPerPage);
  const topicPageCount = Math.ceil(topics.length / topicPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const changeTopicPage = ({ selected }) => {
    setTopicPageNumber(selected);
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
            <TopicList topics={displayTopics} />
            <ReactPaginate
              pageCount={topicPageCount}
              onPageChange={changeTopicPage}
              containerClassName={"topic-pagination-container"}
              activeClassName={"topic-active-container"}
            />
          </div>
        </div>
        <div className="random-exercises-container">
          <h2>Try These Exercises!</h2>
          <div className="random-exercises-list-container">
            <ExerciseList exercises={randomExercises} excludeBookTitle={false}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
