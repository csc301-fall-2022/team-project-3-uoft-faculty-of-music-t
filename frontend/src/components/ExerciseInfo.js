import React from 'react';
import './ExerciseInfo.css';
import ExerciseDetails from './ExerciseDetails';

export default function ExerciseInfo({ exercisedetails }) {
  return (
    <div className='exercise-info-container'>
        {exercisedetails.map((ex) => {
            return <ExerciseDetails key={ex.id} exercisedet={ex} />;
        })}
    </div>
  )
}
