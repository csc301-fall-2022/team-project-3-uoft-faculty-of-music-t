import React, { useEffect, useState } from "react";
import "./RequestedExercise.css";

const RequestedExercise = ({ reqExercise, original }) => {
  console.log(reqExercise);
  const tags = original
    ? reqExercise.tag
      ? reqExercise.tag
      : []
    : reqExercise.new_tag;
  const link = original
    ? reqExercise.book
      ? reqExercise.book.link
      : ""
    : reqExercise.new_link;
  const tenor = original ? reqExercise.tenor : reqExercise.new_tenor;
  const treble = original ? reqExercise.treble : reqExercise.new_treble;
  return (
    <div className="detail-main-container">
      <form className="detail-form">
        <div className="reqexercise-title">
          <label className="req_label_left">Exercise Title & Page</label>
          <div className="req_text">
            {original
              ? reqExercise["page_and_exercise"]
              : reqExercise.new_page_and_exercise}
          </div>
        </div>
        <div className="reqexercise-link">
          <label className="req_label_left">Link</label>
          <div className="req_text">{link}</div>
        </div>
        <div className="reqexercise-side">
          <label className="req_label_left">Side</label>
          <div className="req_text">
            {original ? reqExercise["side"] : reqExercise.new_side}
          </div>
        </div>
        <div className="reqexercise-levels">
          <label className="req_label_left">Tags</label>
          <div className="req_text">
            <div className="tags-container">
              {tags.map((tag) => {
                return (
                  <button
                    className={"tag-icon" + tag["level"]}
                    onClick={(e) => e.preventDefault()}
                  >
                    {tag["tag_name"]}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="reqexercise-clef">
          <label className="req_label_left">Clef</label>
          <div className="req_text">
            {tenor ? "tenor" : ""}
            {treble ? (tenor ? ", treble" : "treble") : ""}
          </div>
        </div>
      </form>
    </div>
  );
};

export default RequestedExercise;
