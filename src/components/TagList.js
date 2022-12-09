import React from "react";
import "./TagList.css";

export default function TagList({ tags, setSelectedTags }) {
  const deleteTag = (e) => {
    e.preventDefault();
    const targetValue = e.target.innerHTML.substr(
      0,
      e.target.innerHTML.indexOf(" ✖️")
    );
    setSelectedTags(
      tags.filter(
        (tag) => tag["tag_name"] !== targetValue.replace("&amp;", "&")
      )
    );
  };
  return (
    <div className="tags-container">
      {tags.map((tag) => {
        return (
          <button
            className={"tag-icon" + tag["level"]}
            onClick={(e) => deleteTag(e)}
          >
            {tag["tag_name"]} {"✖️"}
          </button>
        );
      })}
    </div>
  );
}
