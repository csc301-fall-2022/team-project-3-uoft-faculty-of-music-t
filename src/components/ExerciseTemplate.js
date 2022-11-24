import React, { useEffect, useState } from "react";
import "./ExerciseTemplate.css";
import TagList from "./TagList";
import { getAllTags } from "../api/requests";

// require the argument
const ExerciseTemplate = ({ exercisedet }) => {
  // TODO: update the useState() in the checkbox & selectbox
  const [detail, setDetail] = useState(exercisedet);
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState(exercisedet.tag);

  useEffect(() => {
    getAllTags(setTags);
  }, []);

  return (
    <div className="template-main-container">
      <form className="template-form">
        <div className="exercise-title">
          <label className="label_left">Exercise Title & Page</label>
          <input
            type="text"
            value={detail.page_and_exercise}
            onChange={(e) => {
              setDetail({
                ...detail,
                page_and_exercise: e.target.value,
              });
            }}
          ></input>
        </div>
        <div className="exercise-link">
          <label className="label_left">Link</label>
          <input
            type="text"
            value={detail.book.link}
            onChange={(e) => {
              setDetail({
                ...detail,
                book: {
                  ...detail.book,
                  link: e.target.value,
                },
              });
            }}
          ></input>
        </div>
        <div className="exercise-side">
          <label className="label_left">Side</label>
          <div className="checkbox-side">
            <input
              className="checkbox-input"
              type="checkbox"
              id="left"
              name="left"
              checked={detail.side === "Left Side" ? "checked" : ""}
            ></input>
            <label for="left">Left</label>
          </div>
          <div className="checkbox-side">
            <input
              className="checkbox-input"
              type="checkbox"
              id="right"
              name="right"
              checked={detail.side === "Right Side" ? "checked" : ""}
            ></input>
            <label for="right">Right</label>
          </div>
          <div className="checkbox-side">
            <input
              className="checkbox-input"
              type="checkbox"
              id="others"
              name="others"
              checked={detail.side === "Others" ? "checked" : ""}
            ></input>
            <label for="others">Others</label>
          </div>
        </div>
        <div className="exercise-levels">
          <label className="label_left">Tags</label>
          <div className="select-box">
            {/* List of available tags */}
            <TagList tags={selectedTags}></TagList>
            <select name="tags" multiple>
              {/* popup that let them click Ctrl or Command to multiple options */}
              {tags.map((tag) => {
                return (
                  <option value={tag["tag_name"]}>{tag["tag_name"]}</option>
                );
              })}
            </select>
            {/* option onclick => add to the list of tags (update setSelectedTags) */}
            <button></button>
          </div>
        </div>
        <div className="exercise-clef">
          <label className="label_left">Clef</label>
          <div className="checkbox-side">
            <input
              className="checkbox-input"
              type="checkbox"
              id="tenor"
              name="tenor"
              checked={detail.tenor === true ? "checked" : ""}
            ></input>
            <label for="tenor">Tenor</label>
          </div>
          <div className="checkbox-side">
            <input
              className="checkbox-input"
              type="checkbox"
              id="treble"
              name="treble"
              checked={detail.treble === true ? "checked" : ""}
            ></input>
            <label for="treble">Treble</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExerciseTemplate;
