import React, { useEffect, useState } from "react";
import "./ExerciseTemplate.css";
import { getAllTags, getAllTagsByPaginationUrl } from "../api/requests";

const ExerciseTemplate = ({ detail, setDetail }) => {
  const [choice, setChoice] = useState("Neck Positions Only");
  const [tags, setTags] = useState([]);
  const [tagsPaginationNextUrl, setTagsPaginationNextUrl] = useState("");

  useEffect(() => {
    getAllTags(setTags, setTagsPaginationNextUrl);
  }, []);

  const updateTags = (e) => {
    e.preventDefault();
    const newTag = tags.find((tag) => tag["tag_name"] === choice);
    if (
      detail.tag.findIndex((tag) => tag["tag_name"] === newTag["tag_name"]) ===
      -1
    ) {
      setDetail({
        ...detail,
        tag: detail.tag.concat([newTag]),
      });
    }
  };

  const deleteTag = (e) => {
    e.preventDefault();
    const targetValue = e.target.innerHTML.substr(
      0,
      e.target.innerHTML.indexOf(" ✖️")
    );
    setDetail({
      ...detail,
      tag: detail.tag.filter(
        (tag) => tag["tag_name"] !== targetValue.replace("&amp;", "&")
      ),
    });
  };

  const handleTagsListScroll = (e) => {
    const bottom =
      Math.abs(
        e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight
      ) <= 50;
    if (bottom) {
      getAllTagsByPaginationUrl(
        tags,
        setTags,
        tagsPaginationNextUrl,
        setTagsPaginationNextUrl
      );
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
              value={detail.side}
              onChange={(e) =>
                setDetail({
                  ...detail,
                  side: e.target.value,
                })
              }
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
            <div className="tags-container">
              {detail.tag.map((tag, index) => {
                return (
                  <button
                    key={index}
                    className={"tag-icon" + tag["level"]}
                    onClick={(e) => deleteTag(e)}
                  >
                    {tag["tag_name"]} {"✖️"}
                  </button>
                );
              })}
            </div>
            {/* <TagList detail={exercisedet} setDetail={setDetail}></TagList> */}
            <select
              className="select-box-select"
              name="tags"
              value={choice}
              onChange={(e) => setChoice(e.target.value)}
              onScroll={(e) => handleTagsListScroll(e)}
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
              checked={detail.tenor}
              onChange={(e) =>
                setDetail({ ...detail, tenor: e.target.checked })
              }
            ></input>
            <label for="tenor">Tenor</label>
          </div>
          <div className="checkbox-side">
            <input
              className="checkbox-input"
              type="checkbox"
              id="treble"
              name="treble"
              checked={detail.treble}
              onChange={(e) =>
                setDetail({
                  ...detail,
                  treble: e.target.checked,
                })
              }
            ></input>
            <label for="treble">Treble</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExerciseTemplate;
