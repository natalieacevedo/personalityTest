import * as React from "react";
import "./styles/main.scss";
import Home from "./components/Home";
import Questions from "./components/Questions";
import mockQuestions from "./mockData";
import Results from "./components/Results";
const { useState } = React;

function App() {
  //state to keep questions and answers got from 'backend'
  const [questions, setQuestions] = useState([]);
  const [results, setResults] = useState([]);
  const [finish, setFinish] = useState(false);

  function keepResults(ind, questionNumber) {
    setResults((previous) => {
      if (previous.length >= questionNumber) {
        let newArr = [...previous];
        newArr[questionNumber] = ind;
        console.log(newArr);
        return newArr;
      }
      return previous.concat([ind]);
    });
  }

  function populateQuestions() {
    //here we will make a 'GET API request'.
    setQuestions(mockQuestions);
  }

  function isFinished() {
    setFinish(!finish);
  }

  function goBackHome(e) {
    e.preventDefault();
    setQuestions([]);
    setResults([]);

    isFinished();
  }

  if (questions.length === 0) {
    return <Home populateQuestions={populateQuestions} />;
  } else {
    if (finish) {
      return <Results results={results} goBackHome={goBackHome} />;
    } else {
      return (
        <Questions
          questions={questions}
          keepResults={keepResults}
          results={results}
          isFinished={isFinished}
        />
      );
    }
  }
}

export default App;
