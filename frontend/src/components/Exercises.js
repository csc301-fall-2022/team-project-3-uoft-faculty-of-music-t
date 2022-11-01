import React from 'react';
import './Exercises.css';
import { Link } from 'react-router-dom';

export default function Exercises({ exercise }) {
  return (
    <div className='exercise-container'>
        {/* TODO: Get Book info from api */}
        <Link to="/exerciseDetails">
            <p>{exercise.book.title} ({exercise.page_and_exercise})</p>
        </Link>
        <p>{exercise.book.author} ({exercise.book.date})</p>
    </div>
  )
}
