import React from 'react'
import { connect } from 'react-redux' 
import { fetchQuiz,
         selectAnswer } from '../state/action-creators'
import { useEffect } from 'react'

const  Quiz = (props) =>  {
   console.log(props , "I'm state in component")

   

   useEffect ( () => {
    props.fetchQuiz()
   } , [])
   

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quiz ? (
          <>
            <h2>{props.quiz.question}</h2>

            <div id="quizAnswers">
              <div 
              className= { 
                props.selectedAnswer === props.quiz.answers[0].answer_id ? "answer selected" : "answer" 
              }
              key={props.quiz.answers[0].answer_id}>
                
                {props.quiz.answers[0].text}
                <button 
                 onClick={ () => props.selectAnswer( props.quiz.answers[0].answer_id) } >
                  { props.selectedAnswer === props.quiz.answers[0].answer_id ? "SELECT" : "Select" }
                </button>
              </div>

              <div 
              className= {
                props.selectedAnswer === props.quiz.answers[1].answer_id ? "answer selected" : "answer"
              }
              
              key={props.quiz.answers[1].answer_id}>

                {props.quiz.answers[1].text}

                <button onClick={ () => props.selectAnswer( props.quiz.answers[1].answer_id) }>
                 { props.selectedAnswer === props.quiz.answers[1].answer_id ? "SELECT" : "Select"}
                </button>

              </div>
            
            </div>

            {props.selectedAnswer ? <button id= "submitAnswerBtn"> Submit answer</button> : <button id= "submitAnswerBtn" disabled> Submit answer</button> }

          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = state => {
  console.log("Im state", state)
  return state
}

export default connect (
                          mapStateToProps, 
                          {fetchQuiz,
                           selectAnswer,
                          } 
                       )(Quiz)
