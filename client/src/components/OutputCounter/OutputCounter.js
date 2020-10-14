import React from 'react'
import './OutputCounter.scss'
import {connect} from 'react-redux'


const OutputCounter = ({counter}) => {

  return (
    <div>
      <h2>Counter: {counter}</h2>
    </div>
  )

}

function mapStateToProps(state) {
  return {
    counter: state.counter1.counter
  }
}


export default connect(mapStateToProps)(OutputCounter)