import { useContext, useEffect } from "react";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import { QuizContext } from "./context/quiz";

import "./App.css";

import Welcome from './components/Welcome';
import Question from './components/Question';
import GameOver from './components/GameOver';
import PickCategory from "./components/PickCategory";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="App">
      <div>
        <Router>
        <h1>Astronomy Quiz</h1>
          {quizState.gameStage === "Start" && <Welcome />}
          {quizState.gameStage === "Category" && <PickCategory />}
          {quizState.gameStage === "Playing" && <Question />}
          {quizState.gameStage === "End" && <GameOver />}
        </Router>
      </div>
    </div>
  );
}

export default App;
