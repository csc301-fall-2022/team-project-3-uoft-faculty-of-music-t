import React from 'react';
import './BooksList.css';
import Books from './Books';

export default function BooksList({ books }) {
	return (
		<div className='books-container'>
			{books.map((book) => {
				return <Books key={book.id} book={book} />;
			})}
		</div>
	)
}
