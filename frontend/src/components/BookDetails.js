import React from 'react';
import './BookDetails.css';

export default function BookDetails({ bookdet }) {
  return (
    <div className='bookdet-container'>
        <p>Book Name: {bookdet.title}</p>
        <p>Book Author(s): {bookdet.author}</p>
        <p>Book Date: {bookdet.date}</p>
        <p>
          <a href={bookdet.link}>Link to book</a>
        </p>
    </div>
  )
}
