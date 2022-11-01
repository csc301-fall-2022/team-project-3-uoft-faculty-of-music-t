import React from 'react'
import './Books.css'
import { Link } from "react-router-dom";

export default function Books({ book }) {
  return (
    <div className='book-container'>
        {/* TODO: Get Book info from api */}
        <Link to="bookDetails"> 
            <p>{book.title}</p>
        </Link>
        <p>{book.author} ({book.date})</p>
    </div>
  )
}
