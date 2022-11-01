import React from 'react';
import './BookDetails.css';
// import { Link } from 'react-router-dom';

export default function BookDetails({ bookdet }) {
  return (
    <div className='bookdet-container'>
      <p>Book Name: {bookdet.title}</p>
      <p>Author: {bookdet.author}</p>
      <p>Date: {bookdet.date}</p>
      <p>
        <a href={bookdet.link}>Link to book</a>
      </p>
    </div>
  )
}
