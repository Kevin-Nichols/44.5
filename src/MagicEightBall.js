import React, { useState } from "react";
import stockAnswers from "./answers.json";
import message from "./randomMsg";
import "./MagicEightBall.css";

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