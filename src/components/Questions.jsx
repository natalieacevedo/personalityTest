import { useState } from "react";
import ProgressBar from "./ProgressBar";

function Questions({ questions, results, keepResults, isFinished }) {
  //state for current question
  const [currentQuestion, setCurrentQuestion] = useState(0);

  console.log(results);
  console.log(currentQuestion);

  let answers = questions[currentQuestion].answers;

  const lastQuestion =
    currentQuestion === questions.length - 1
      ? "find out results"
      : "Next Question";

  function previousQuestion() {
    setCurrentQuestion((previous) => {
      let questionNumber = previous - 1;
      return questionNumber;
    });
  }

  //changes number of question to move forward
  function questionNumber() {
    setCurrentQuestion((previous) => {
      let questionNumber = previous + 1;
      if (questionNumber >= questions.length) {
        isFinished();
      } else if (questionNumber === 0) {
      }
      return questionNumber;
    });
  }

  return (
    <div className="questions-wrapper">
      <h2>{questions[currentQuestion].question}</h2>
      <ol>
        {answers.map((answer, i) => (
          <li
            onClick={(e) => keepResults(i, currentQuestion)}
            className={results[currentQuestion] === i ? "selected" : "option"}
            key={i}
          >
            {answer}
          </li>
        ))}
      </ol>

      <ProgressBar questionNumber={currentQuestion} />
      <div className="questions-buttons">
        <button
          className={currentQuestion === 0 ? "hideMe" : "questionBt"}
          onClick={previousQuestion}
        >
          Previous
        </button>

        <button
          className={
            results.length === currentQuestion ? "disable" : "questionBt"
          }
          disabled={results.length === currentQuestion}
          onClick={questionNumber}
        >
          {lastQuestion}
        </button>
      </div>
    </div>
  );
}

export default Questions;
