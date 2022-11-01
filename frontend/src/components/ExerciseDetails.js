import React from 'react';
import './ExerciseDetails.css';

export default function ExerciseDetails({ exercisedet }) {
  return (
    <div className='exercisedet-container'>
      {/* THESE ARE SUDO, what to show depends on the data read from api */}
      <p>Exercise Name: {exercisedet.name}</p>
      <p>Left/Right Side: {exercisedet.lrside}</p>
      <p>Level 1: {exercisedet.level1}</p>
      <p>Level 2: {exercisedet.level2}</p>
      <p>Clef: {exercisedet.clef}</p>
    </div>
  )
}
