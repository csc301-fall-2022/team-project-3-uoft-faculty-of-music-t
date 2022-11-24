import React, { useState, useEffect } from 'react'
import "../App.css"
import "./HomePage.css"
import SearchBar from '../components/SearchBar'
import { Link } from "react-router-dom";
import BooksList from '../components/BooksList';
import TopicList from '../components/TopicList';
import { getAllBooks, getAllTags } from '../api/requests';
import ReactPaginate from 'react-paginate';

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getAllBooks(setBooks);
    getAllTags(setTopics)
  }, [])

  const [pageNumber, setPageNumber] = useState(0);
  const bookPerPage = 10;  // number of books per page.
  const pagesVisited = pageNumber * bookPerPage;

  const displayBooks = books.slice(pagesVisited, pagesVisited + bookPerPage);

  const pageCount = Math.ceil(books.length / bookPerPage);

  const changePage = ({selected}) => {
    setPageNumber(selected)
  };

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
                    {/* <BooksList books={books}/> */}
                    <BooksList books={displayBooks}/>
                    <ReactPaginate
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"hp-pagination-container"}
                        activeClassName={"hp-active-container"}
                    />
                </div>
                <div className="content-list-container-divider">
                </div>
                <div className="browse-by-topic-list-container">
                    <h2>Browse By Topic</h2>
                    <TopicList topics={topics}/>
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
