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
        //setHideButton(true);
      }
      return questionNumber;
    });
  }

  return (
    <>
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

      <button
        className={currentQuestion === 0 ? "hideMe" : "buttonsStyle"}
        onClick={previousQuestion}
      >
        Previous question
      </button>

      <button
        disabled={results.length === currentQuestion}
        onClick={questionNumber}
      >
        {lastQuestion}
      </button>
    </>
  );
}

export default Questions;
