import "../App.css"
import React , {useState , useContext} from 'react'
import MainMenu from './MainMenu';
import Quize from './Quize';
import EndScreen from './EndScreen';
import { QuizContext } from '../Helpers/Contexts';


export default function QuizApp() {
    const [gameState , setGameState]=useState("menu")
    const [score , setScore] = useState(0)
    return (
      <div>
        <QuizContext.Provider value={{gameState , setGameState , score , setScore}}>
        {gameState === "menu" && <MainMenu/>}
        {gameState === "quiz" && <Quize/>}
        {gameState === "endScreen" && <EndScreen/>}
        </QuizContext.Provider>
      </div>
    )
  }
  