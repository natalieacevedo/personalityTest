import React from "react";

function ProgressBar({max,value}) {
    




    return (
        <>

            <progress value={value} max={max}></progress>
            <span>{` ${value} out of ${max} questions`}</span>
        </>
    )



};

export default ProgressBar;