import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {

  const onChange = evt => {
     props.inputChange(evt.target.value, evt.target.id)
  }

  const onSubmit = evt => {
    evt.preventDefault()

    props.postQuiz({
      question_text: props.form.newQuestion, 
      true_answer_text: props.form.newTrueAnswer, 
      false_answer_text:props.form.newFalseAnswer
    })
  }

  return (
    <form id="form" onSubmit={onSubmit }>

      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" value={props.form.newQuestion} />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" value={props.form.newTrueAnswer}/>
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" value={props.form.newFalseAnswer}/>


      {
        props.form.newQuestion.trim() && props.form.newTrueAnswer.trim()&& props.form.newFalseAnswer.trim() ? 
        <button id="submitNewQuizBtn" >Submit new quiz</button> 
        : 
        <button id="submitNewQuizBtn" disabled >Submit new quiz</button>
      }
      
    </form>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return state
}

export default connect( mapStateToProps, actionCreators)(Form)
