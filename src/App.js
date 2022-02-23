import * as React from "react";
import "./styles/main.scss";
import ProgressBar from "./components/ProgressBar";
import Home from "./components/Home";
import Results from "./components/Results";
import Questions from "./components/Questions";
const { useState, useEffect } = React;


function App() {

  //progression bar:
  const [value, changeValue] = useState(0);
  //state to keep questions and answers got from 'backend'
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
  //state for current question
  const [currentQuestion, setCurrentQuestion] = useState(0);
  //boolean button for calling question component
  const [callQuestion, setCallQuestion] = useState(false);

  //I use this function to change the state of the questions and answers and then will pass it to the questions component

  //this will be the function I'll use on the question components to altering the state and fetching the data
  function stateQuestions(dataResults) {

    setQuestionsAndAnswers(dataResults)

  };

  //this function will be use to get the next question number or start again if the user pushes the buttom after the last question.

  function questionNumber() {
    setCurrentQuestion(previous => {
      let question = previous + 1;
      if (question > 5) {
        question = 0;
        return (
          <div>
            <h2>This are your test results:</h2>
          </div>
        )
      } else {
        return question;
      }
    })
    
  };

  //manages the progression bar:
  useEffect(() => {

    const interval = setInterval(() => {
      changeValue(previous => {
        const newValue = previous + 1;
        if (newValue === 5) {
          clearInterval(interval)
        }
        return newValue;
      })
    }, 1000)

  }, []);

  //call questions when user wants to do test
  function callQuestionComponent(e) {
    e.preventDefault();
    setCallQuestion(!callQuestion)
  };

  

  return (
    <div>
      <Home/>
    
      <Results/>
        
      <button onClick={callQuestionComponent}>Push me to find out!</button>
      {
        callQuestion && <Questions
          questionNumber={questionNumber}
          currentQuestion={currentQuestion}
          questionsAndAnswers={questionsAndAnswers}
          setQuestionsAndAnswers={stateQuestions}/>
        // <ProgressBar value={value} max={5} />
      }
     
    </div>
  );
}





export default App;
