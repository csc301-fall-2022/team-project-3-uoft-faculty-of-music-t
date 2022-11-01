import React from 'react';
import './ExerciseDetails.css';
// import { Link } from 'react-router-dom';

export default function ExerciseDetails({ exercisedet }) {
  return (
    <div className='exercisedet-container'>
      <p>Exercise Page and Name: {exercisedet.page_and_exercise}</p>
      <p>Side: {exercisedet.side}</p>
      <p>Book Name: {exercisedet.book.title}</p>
      <p>Author: {exercisedet.book.author}</p>
      <p>Date: {exercisedet.book.date}</p>
      {exercisedet.tenor && <p>Tenor: Yes</p>}
      {!exercisedet.tenor && <p>Tenor: No</p>}
      {exercisedet.treble && <p>Treble: Yes</p>}
      {!exercisedet.treble && <p>Treble: No</p>}
      <p>
        <a href={exercisedet.book.link}>Link to book</a>
      </p>
    </div>
  )
}
