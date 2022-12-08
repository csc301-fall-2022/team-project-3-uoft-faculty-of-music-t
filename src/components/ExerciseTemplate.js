import React, { useEffect, useState } from "react";
import "./ExerciseTemplate.css";
import TagList from "./TagList";
import { getAllTags } from "../api/requests";

const ExerciseTemplate = ({ exercisedet }) => {
  const [detail, setDetail] = useState(exercisedet);
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState(exercisedet.tag);
  const [choice, setChoice] = useState("Neck Positions Only");
  const [side, setSide] = useState(detail.side);
  const [tenor, setTenor] = useState(detail.tenor);
  const [treble, setTreble] = useState(detail.treble);

  useEffect(() => {
    getAllTags(setTags);
  }, []);

  const updateTags = (e) => {
    e.preventDefault();
    // console.log(choice);
    const newTag = tags.find((tag) => tag["tag_name"] === choice);
    // Prevent adding already existing tag
    // console.log(newTag);
    // console.log(selectedTags);
    // console.log(
    //   selectedTags.findIndex((tag) => tag["tag_name"] === newTag["tag_name"])
    // );
    if (
      selectedTags.findIndex(
        (tag) => tag["tag_name"] === newTag["tag_name"]
      ) === -1
    ) {
      setSelectedTags(selectedTags.concat([newTag]));
    }
  };

  return (
    <div className="template-main-container">
      <form className="template-form">
        <div className="exercise-title">
          <label className="label_left">Exercise Title & Page</label>
          <input
            className="edit-input"
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
            className="edit-input"
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
          <div className="select-box">
            <select
              className="select-box-select"
              name="sides"
              value={side}
              onChange={(e) => setSide(e.target.value)}
            >
              <option value="Left Side">Left Side</option>
              <option value="Right Side">Right Side</option>
              <option value="Others">Others</option>
            </select>
          </div>
        </div>
        <div className="exercise-levels">
          <label className="label_left">Tags</label>
          <div className="select-box">
            <TagList
              tags={selectedTags}
              setSelectedTags={setSelectedTags}
            ></TagList>
            <select
              className="select-box-select"
              name="tags"
              value={choice}
              onChange={(e) => setChoice(e.target.value)}
            >
              {tags.map((tag, index) => {
                return (
                  <option key={index} value={tag["tag_name"]}>
                    {tag["tag_name"]}
                  </option>
                );
              })}
            </select>
            <button id="add-button" onClick={updateTags}>
              add
            </button>
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
              checked={tenor}
              onChange={(e) => setTenor(e.target.checked)}
            ></input>
            <label for="tenor">Tenor</label>
          </div>
          <div className="checkbox-side">
            <input
              className="checkbox-input"
              type="checkbox"
              id="treble"
              name="treble"
              checked={treble}
              onChange={(e) => setTreble(e.target.checked)}
            ></input>
            <label for="treble">Treble</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExerciseTemplate;
