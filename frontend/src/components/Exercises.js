import React from 'react';
import './Exercises.css';
import { Link } from 'react-router-dom';

export default function Exercises({ exercise }) {
  return (
    <div className='exercise-container'>
        {/* TODO: Get Book info from api */}
        {/* Assign exercise based on book? */}
        <Link to="/exerciseDetails">
            <p>{exercise.name}</p>
        </Link>
    </div>
  )
}
