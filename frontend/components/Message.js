import React from 'react'
import { connect } from 'react-redux'


const Message = (props) =>  {

  return <div id="message">{ props.infoMessage }</div>

}

const mapStateToProps = state => {
  return state
}
export default connect ( mapStateToProps, null ) (Message)
