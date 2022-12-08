import React from 'react';
import './ExerciseInfo.css';
import ExerciseDetails from './ExerciseDetails';
import RequestedExercise from './RequestedExercise';

export default function ExerciseInfo({ exercisedetails, requested }) {
  if (requested) {
    return (
      <div className='exercise-info-container'>
        <RequestedExercise reqExercise={exercisedetails} />
      </div>
    )
  } else {
    return (
      <div className='exercise-info-container'>
        <ExerciseDetails exercisedet={exercisedetails} />
      </div>
    )
  }
}
