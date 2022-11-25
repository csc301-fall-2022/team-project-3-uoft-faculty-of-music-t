import React from "react";
import "./TagList.css";

export default function TagList({ tags, setSelectedTags }) {
  // on click => delete the tags
  const deleteTag = (e) => {
    console.log(e.target.value);
    e.preventDefault();

    setSelectedTags(tags.filter((tag) => tag["tag_name"] !== e.target.value));
  };
  return (
    <div className="tags-container">
      {tags.map((tag) => {
        return (
          <button className={"tag-icon" + tag["level"]} onClick={deleteTag}>
            {tag["tag_name"]} {"⨉"}
          </button>
        );
      })}
    </div>
  );
}
