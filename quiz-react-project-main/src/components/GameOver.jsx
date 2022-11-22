import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import WellDone from "../img/tesseract.png";

import "./GameOver.css";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <h2>Game Over!</h2>
      <p>Score: {quizState.score}</p>
      <p>
        You got {quizState.score} of {quizState.questions.length}{" "}
        questions.
      </p>
      <img src={WellDone} alt="End of the quiz" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Restart</button>
    </div>
  );
};

export default GameOver;
