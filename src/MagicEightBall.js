import React, { useState } from "react";
import stockAnswers from "./answers.json";
import message from "./randomMsg";
import "./MagicEightBall.css";

// Shows a default msg, then updates the msg and color with a random message from answers.json on click.
const MagicEightBall = ({answers = stockAnswers}) => {
  const [answer, setAnswer] = useState({
    msg: "Thing of a Question",
    color: "black"
  });

  return (
    <div className="MagicEightBall"
         onClick={() => setAnswer(message(answers))}
         style={{backgroundColor:  answer.color}}>

    <p className="MagicEightBall-answer">{answer.msg}</p>
    </div>
  );
}

export default MagicEightBall;