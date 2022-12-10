import React from "react";
import "./TopicList.css";
import Topics from "./Topics";

export default function TopicList({ topics }) {
  return (
    <div className="topics-container">
      {topics.map((topic) => {
        return <Topics key={topic.id} topic={topic} />;
      })}
    </div>
  );
}
