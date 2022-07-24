import React , {useContext} from 'react'
import { QuizContext } from '../Helpers/Contexts'
import { Questions } from '../Helpers/QuestionBank'


export default function EndScreen() {
  const {score , setScore} =useContext(QuizContext)
  return (
    <div className='continer'>
    <div className='EndScreen'>
        {/* <h1>Quiz Finsh</h1> */}
        <h3>{score}/{Questions.length}</h3><br/><br/>
        <div>
        {score < 2 ? <h2 style={{textAlign:"center" , marginBottom:"30px"}} >you sad</h2> : <h2 >you happy</h2> }
        </div>
        </div>
    </div>
  )
}
