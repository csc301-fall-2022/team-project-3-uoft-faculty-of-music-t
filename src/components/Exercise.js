import React, { useState, useEffect } from "react";
import "./Exercise.css";
import { Link } from "react-router-dom";

export default function Exercise({ exercise, excludeBookTitle }) {
  const [tagsAsString, setTagsAsString] = useState("");

  useEffect(() => {
    let str = "";
    const tags = exercise.tag;
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
  }, []);

  if (excludeBookTitle) {
    return (
      <div className="exercise-container">
        <p className="exercise-tags-list">{tagsAsString}</p>
        <Link to="/exerciseDetails" state={{ exercise: exercise }} className="exercise-page-and-exercise">
          {exercise.page_and_exercise}
        </Link>
      </div>
    );
  } else {
    return (
      <div className="exercise-container">
        <p className="exercise-tags-list">{tagsAsString}</p>
        <Link to="/exerciseDetails" state={{ exercise: exercise }} className="exercise-page-and-exercise">
          <p>
            {exercise.book.title} ({exercise.page_and_exercise})
          </p>
        </Link>
      </div>
    );
  }
}
