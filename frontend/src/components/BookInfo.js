import React from 'react';
import './BookInfo.css';
import BookDetails from './BookDetails';

export default function BookInfo({ bookdetails }) {
  return (
    <div className='book-info-container'>
        {bookdetails.map((book) => {
            return <BookDetails key={book.id} bookdet={book} />;
        })}
    </div>
  )
}
