import React , {useContext} from 'react'
import { QuizContext } from '../Helpers/Contexts'
import "../App.css"
export default function MainMenu() {
    const {gameState , setGameState} =useContext(QuizContext)
  return (

    <div className='continer'>
    <div className='Menu'>
        <button onClick={()=>{setGameState("quiz")}}>Start Quiz</button>
    </div>
    </div>
  )
}
