import React from 'react'
import "../App.css"
import "./HomePage.css"
import SearchBar from '../components/SearchBar'
import { Link } from "react-router-dom";
import BooksList from '../components/BooksList';
import TopicList from '../components/TopicList';

const HomePage = () => {
  // TODO: Load books using api
  const books = [{id: 1, title:"Nouvelle Méthode de Violoncelle", author:"Abbiate, Louis", date:"1900", link: "https://imslp.org/wiki/Nouvelle_m%C3%A9thode_de_violoncelle_(Abbiate%2C_Louis)"}, {id: 2, title:"Operating Systems", author:"Jack Sun", date:"2022"}];  
  // TODO: Load topics using api
  const topics = [{tag_name:"University of Tears"}, {tag_name:"Arpeggios"}, {tag_name:"Articulation"}, {tag_name:"Balance"}, {tag_name:"Bow Control"}, {tag_name:"Bow Distribution"}]; 

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
                    <div>
                        <BooksList books={books}/>
                    </div>
                </div>
                {/* <div className="content-list-container-divider">
                </div> */}
                <div className="browse-by-topic-list-container">
                    <h2>Browse By Topic</h2>
                    <div>
                        <TopicList topics={topics}/>
                    </div>
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