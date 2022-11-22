import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Welcome.css";

import Quiz from "../img/groot.png";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <p>Click here to start:</p>
      <button onClick={() => dispatch({ type: "CHANGE_STAGE" })}>
        Start
      </button>
      <img src={Quiz} alt="Quiz Start" />
    </div>
  );
};
export default Welcome;
