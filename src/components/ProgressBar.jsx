import React from "react";

function ProgressBar({questionNumber}) {
    
    const max = 5;

    let answersLength = questionNumber +1;
    

   

   

    return (
        <>

            <progress value={answersLength} max={max}></progress>
            <span>{` ${answersLength} out of ${max} questions`}</span>
        </>
    )



};

export default ProgressBar;