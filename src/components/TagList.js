import React from "react";
import "./TagList.css";

export default function TagList({ tags }) {
  return (
    <div className="tags-container">
      {tags.map((tag) => {
        // on click => delete the tags
        return <button>{tag["tag_name"]}</button>;
      })}
    </div>
  );
}
