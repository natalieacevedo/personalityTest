import React from "react";

function ProgressBar({ questionNumber }) {
  const max = 5;

  let answersLength = questionNumber + 1;

  return (
    <div className="progress-wrapper">
      <progress value={answersLength} max={max}></progress>
      <span>{` ${answersLength} out of ${max} questions`}</span>
    </div>
  );
}

export default ProgressBar;
