import React from 'react';
import './Exercise.css';
import { Link } from 'react-router-dom';

export default function Exercise({ exercise }) {
  return (
    <div className='exercise-container'>
        {/* TODO: Get Book info from api */}
        <Link to="/exerciseDetails" state={{exercise: exercise}}>
            <p>{exercise.book.title} ({exercise.page_and_exercise})</p>
        </Link>
        <p className='author-date-labels'>{exercise.book.author} ({exercise.book.date})</p>
    </div>
  )
}
