import { useState, useEffect } from "react";



// During dinner parties at your home, you have a hard time with people who:
// Ask you to tell a story in front of everyone else
// Talk privately between themselves
// Hang around you all evening
// Always drag the conversation back to themselves







const mockUpData = [{
    "question": "During dinner parties at your home, you have a hard time with people who:",
    "answers": ["Ask you to tell a story in front of everyone else", "Talk privately between themselves", "Hang around you all evening", "Always drag the conversation back to themselves"]
    
},
{
    "question": "You crack a joke at work, but nobody seems to have noticed. You:",
    "answers": ["Think it’s for the best, it was a lame joke anyway",
        "Wait to share it with your friends after work ",
        "Try again a bit later with one of your colleagues",
        "Keep telling it until they pay attention "]

},
{
    "question": "This morning, your agenda seems to be free. You: ",
    "answers": ["Know that somebody will find a reason to come and bother you", "Heave a sigh of relief and look forward to a day without stress ", "Question your colleagues about a project that’s been worrying you ",
        "Pick up the phone and start filling up your agenda with meetings "]

},
{
    "question": "During dinner, the discussion moves to a subject about which you know nothing at all. You:",
    "answers": ["Don’t dare show that you don’t know anything about the subject ", " Barely follow the discussion ", "Question your colleagues about a project that’s been worrying you ",
        "Change the subject of discussion "]
},
{
    "question": "You’re out with a group of friends and there’s a person who’s quite shy and doesn’t talk much. You: ",
    "answers": ["Notice that they’re alone, but don’t go over to talk with them", "Go and have a chat with them", "Shoot some friendly smiles in their direction", "Hardly notice them at all "]
}
    
    
];

          
        function Questions({questionNumber,questionsAndAnswers,setQuestionsAndAnswers,currentQuestion}) {
    






    return (
        <>
        <h3>are you loco?</h3>
        </>

)



};

export default Questions;
