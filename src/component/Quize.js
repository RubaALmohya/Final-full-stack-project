import React , {useState , useContext} from 'react'
import {Questions} from '../Helpers/QuestionBank'
import { QuizContext } from '../Helpers/Contexts'
import "../App.css"

export default function Quize() {
  const [currQuesiton , setCurrQuesiton] = useState(0);
  const [optionChosen , setOptionChosen] = useState("");
  const {score , setScore , gameState , setGameState} =useContext(QuizContext)
  const totalScore= score

  const chooseOpation = (option) =>{
    setOptionChosen(option)
  }
  const nextQuesiton = ()=>{
    if (Questions[currQuesiton].answer == optionChosen){
      setScore(score + 1);
    }
    setCurrQuesiton(currQuesiton + 1)
  }
  const finishQuiz = () =>{
    if (Questions[currQuesiton].answer == optionChosen){
      setScore(score + 1);
    }
    setGameState("endScreen")

  }
  return (
    // <div className='Quiz'>
       
    //   <h1>{Questions[currQuesiton].question}</h1>
    //   <div className='options'>
    //     <button onClick={()=>{chooseOpation("optionA")}}>{Questions[currQuesiton].optionA}</button>
    //     <button onClick={()=>{chooseOpation("optionB")}}>{Questions[currQuesiton].optionB}</button>
    //   </div>
      
    //   {currQuesiton == Questions.length - 1 ? (
    //     <button onClick={finishQuiz}>Finsh Quiz</button>
    //   ) : <button onClick={nextQuesiton}>Next Question</button>}
      
      
    // </div>
     <div className='continer'>
    <div className='Quize'>
      {/* <div div className='score-section'>{Questions.length }</div> */}
      <div className='question-section'>
						<div className='question-count'>
							<span>Question {currQuesiton+1}</span>/{Questions.length}
						</div>
            <div className='question-text'>{Questions[currQuesiton].question}</div>
					</div>
       
    <div className='answer-section'>
      <button onClick={()=>{chooseOpation("optionA")}}>{Questions[currQuesiton].optionA}</button>
      <button onClick={()=>{chooseOpation("optionB")}}>{Questions[currQuesiton].optionB}</button>
      {currQuesiton == Questions.length - 1 ? (
      <button onClick={finishQuiz}>Finsh Quiz</button>
    ) : <button onClick={nextQuesiton}>Next Question</button>}
    
    </div>
    
    
    </div>
  </div>
  )
}
