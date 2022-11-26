import React from "react";
import "./ExerciseList.css";
import Exercise from "./Exercise";

export default function ExerciseList({ exercises, excludeBookTitle }) {
  return (
    <div className="exercise-list-container">
      {exercises?.map((exercise) => {
        return <Exercise key={exercise.id} exercise={exercise} excludeBookTitle={excludeBookTitle}/>;
      })}
    </div>
  );
}
