import React from 'react';
import './BookDetails.css';

export default function BookDetails({ bookdet }) {
  const handleButtonClick = (e) => {
    e.preventDefault();
    window.open(bookdet.link);
  };

  return (
    <div className='bookdet-container'>
        <p><span>Book Name:</span> {bookdet.title}</p>
        <p><span>Book Author(s):</span> {bookdet.author}</p>
        <p><span>Book Date:</span> {bookdet.date}</p>
        <button className="view-book-button" onClick={e => handleButtonClick(e)}>View the Book</button>
    </div>
  )
}
