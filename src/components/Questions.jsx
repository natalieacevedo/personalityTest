import { useState, useEffect } from "react";
import Results from "./Results";
import ProgressBar from "./ProgressBar";





function Questions({questions,results,keepResults}) {
            
   //state for current question
  const [currentQuestion, setCurrentQuestion] = useState(0);
 
  



  let answers = questions[currentQuestion].answers;
  
  const lastQuestion = currentQuestion === 4 ? "find out results" : "Next Question";

  

  //changes number of question
  function questionNumber() {
    
    setCurrentQuestion(previous => {
      let questionNumber = previous + 1;
      if (questionNumber >= 5) {
        questionNumber = 0;
       
      } 
        return questionNumber;
      
    })
  };


 

  console.log(results[currentQuestion]);

    return (
        <>
        <h2>{questions[currentQuestion].question}</h2>
        <ol>
          {answers.map((answer, i) =>
            <li onClick={(e) => keepResults(i, currentQuestion)} className={results[currentQuestion] === i ? "selected" : "option"} key={i}>{answer}
            </li>)}
        </ol>
        <ProgressBar questionNumber={currentQuestion}/>
        <button onClick={questionNumber}>{lastQuestion}</button>
       
  
        </>

)



};

export default Questions;
