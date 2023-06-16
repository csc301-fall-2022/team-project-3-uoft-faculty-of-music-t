import React from 'react'
import './Books.css'
import { Link } from "react-router-dom";

export default function Books({ book }) {

  // Trim title and author if too long
  const title = book.title.length > 50 ? book.title.substring(0, 50)+"..." : book.title
  const author = book.author.length > 20 ? book.author.substring(0, 20) + "..." : book.author;

  return (
    <div className='book-container'>
        {/* TODO: Get Book info from api */}
        <Link to="/bookDetails" state={{ id: book.id }}> 
            <p>{title}</p>
        </Link>
        <p> {author} ({book.date})</p>
    </div>
  )
}