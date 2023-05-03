import React from 'react'
import { connect } from 'react-redux' 
import { fetchQuiz } from '../state/action-creators'
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
              <div className="answer selected">
                {props.quiz.answers[0].text}
                <button>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                {props.quiz.answers[1].text}
                <button>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = state => {
  return state
}

export default connect (mapStateToProps, {fetchQuiz} )(Quiz)
