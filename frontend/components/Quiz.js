import React from 'react'
import { connect } from 'react-redux'

import { fetchQuiz,
         selectAnswer,
         postAnswer
        } from '../state/action-creators'

import { useEffect } from 'react'

const  Quiz = (props) =>  {

   useEffect ( () => { 
    if (props.quiz === null) {
    props.fetchQuiz()
    }
   }, [])

  return (
    <div id="wrapper">
      {
        props.quiz ? 
        (
          <>
          <h2>{props.quiz.question}</h2>

            <div id="quizAnswers">
              
              <div 

              className= { 
                props.selectedAnswer === props.quiz.answers[0].answer_id ? "answer selected" : "answer" 
              }

              key={props.quiz.answers[0].answer_id} >
                
              {props.quiz.answers[0].text}

              <button 
                 onClick= { () => props.selectAnswer( props.quiz.answers[0].answer_id) } >

                  {props.selectedAnswer === props.quiz.answers[0].answer_id ? "SELECTED" : "Select"}

              </button>

              </div>

              <div 

              className= {
                props.selectedAnswer === props.quiz.answers[1].answer_id ? "answer selected" : "answer"
              }

              key={props.quiz.answers[1].answer_id} >
                
              {props.quiz.answers[1].text}

              <button 
              
                onClick={ () => props.selectAnswer( props.quiz.answers[1].answer_id) } >

                 { props.selectedAnswer === props.quiz.answers[1].answer_id ? "SELECTED" : "Select"}

              </button>

              </div>
            
            </div>
          
          <div>
            
          {props.selectedAnswer ? 

            < button id= "submitAnswerBtn" onClick={() => props.postAnswer({quiz_id: props.quiz.quiz_id, answer_id: props.selectedAnswer}) } > Submit answer </button> 
            : 
            <button id= "submitAnswerBtn" disabled> Submit answer</button> 
          }

          </div>
        
          </>

        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state, "Im state inside mapStateToProps")
  return  state
}

export default connect (
                          mapStateToProps, 
                          {
                          fetchQuiz,
                          selectAnswer,
                          postAnswer
                          }
                       )(Quiz)
