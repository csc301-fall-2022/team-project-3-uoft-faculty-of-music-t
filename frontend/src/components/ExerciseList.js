import React from 'react';
import './Exercises.css';
import Exercise from './Exercises';

export default function ExerciseList({ exercises }) {
  return (
    <div className='exercise-container'>
      {exercises.map((exercise) => {
        return <Exercise key={exercise.key} exercise={exercise} />;  // TODO: id
      })}
    </div>
  )
}
