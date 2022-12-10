import React, { useState, useEffect } from "react";
import "./Exercise.css";
import { Link } from "react-router-dom";
import { getExerciseDetails } from "../api/requests";

export default function Exercise({
  exercise,
  excludeBookTitle,
  requested,
  approved,
}) {
  const [tagsAsString, setTagsAsString] = useState("");
  const [exerciseDetail, setExerciseDetail] = useState(null);

  useEffect(() => {
    let str = "";
    let tags;
    requested || approved ? (tags = exercise.new_tag) : (tags = exercise.tag);
    let i = 0;
    for (const tag of tags) {
      if (i === 0) {
        str = tag.tag_name;
      } else {
        str = str + ", " + tag.tag_name;
      }
      i += 1;
    }
    setTagsAsString(str);
    if (requested || (approved && exercise)) {
      console.log(exercise);
      getExerciseDetails(setExerciseDetail, exercise.exercise_id);
      // getBookDetails(setBookDetail, exercise.new_book_id);
    }
  }, []);

  if (excludeBookTitle) {
    return (
      <div className="exercise-container">
        <p className="exercise-tags-list">{tagsAsString}</p>
        <Link
          to="/exerciseDetails"
          state={{ exercise: exercise }}
          className="exercise-page-and-exercise"
        >
          {exercise.page_and_exercise}
        </Link>
      </div>
    );
  } else if (requested || approved) {
    return (
      // need to add book title
      <div className="exercise-container">
        <Link
          to="/requestDetail"
          state={{ exercise: exercise, approved: approved }}
        >
          <p>
            {exerciseDetail
              ? exerciseDetail.book.title.substring(0, 20) + "..."
              : ""}{" "}
            {exercise ? exercise.new_page_and_exercise : ""}
          </p>
        </Link>
        <p className="exercise-tags-list">{tagsAsString}</p>
      </div>
    );
  } else {
    return (
      <div className="exercise-container">
        <p className="exercise-tags-list">{tagsAsString}</p>
        <Link
          to="/exerciseDetails"
          state={{ exercise: exercise }}
          className="exercise-page-and-exercise"
        >
          <p>
            {exercise.book.title} ({exercise.page_and_exercise})
          </p>
        </Link>
      </div>
    );
  }
}
