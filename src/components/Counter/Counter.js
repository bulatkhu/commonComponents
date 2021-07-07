import React from 'react'
import './Counter.scss'
import {connect} from 'react-redux'
// import * as actions from '../../redux/actions/actionTypes'
import {
  addCounter,
  addNumber, asyncAddNumber,
  onAddInput,
  onSubInput,
  setCounter,
  subCounter,
  subNumber
} from '../../redux/actions/actions'


const Counter = props => {

  const inputHandler = (target, type) => {
    const value = +target.value

    if (type === 'add') {
      props.onAddInput(value)
    } else if (type === 'sub') {
      props.onSubInput(value)
    }

  }

  const formSubmit = (ev, type) => {
    ev.preventDefault()
    const value = +ev.target.number.value

    if (value && typeof +value === 'number') {

      if (type === 'add') {
        props.onAddNumber(value)
        props.onAddInput(null)
        clearFormInput(ev.target.number)
      } else if (type === 'sub') {
        props.onSubNumber(value)
        props.onSubInput(null)
        clearFormInput(ev.target.number)
      }
    }
  }


  return (
    <div className="counter__wrapper">
      <div className="counter">




        <button onClick={props.onAdd} className="counter__btn">+1</button>
        <button onClick={props.onSub} className="counter__btn">-1</button>
        <button onClick={() => props.onAsyncAdd(100)} className="counter__btn">Add async 100 </button>
        <hr/>
        <input

          type="number"
          onChange={ev => props.onSet(ev.target.value)}
          placeholder="Set a number"
        />

        <hr/>

        <form onSubmit={ev => formSubmit(ev, 'add')}>
          <input

            onChange={ev => inputHandler(ev.target, 'add')}
            name="number"
            type="number"
            placeholder="Add number"
          />
          <button type="submit">Add number {props.btnAddNumber}</button>

        </form>

        <form onSubmit={ev => formSubmit(ev, 'sub')}>
          <input
            onChange={ev => inputHandler(ev.target, 'sub')}
            name="number"
            type="number"
            placeholder="Sub number"
          />
          <button type="submit">Sub number {props.btnSubNumber}</button>

        </form>

      </div>
    </div>
  )
}



function clearFormInput(input) {
  input.value = ''
}

function mapStateToProps(state) {
  return {
    btnAddNumber: state.counter1.btnAddNumber,
    btnSubNumber: state.counter1.btnSubNumber
  }
}


function mapDispatchToProps(dispatch) {

  return {
    onAdd: () => dispatch(addCounter()),
    onSub: () => dispatch(subCounter()),
    onSet: num => dispatch(setCounter(num)),
    onAddNumber: num => dispatch(addNumber(num)),
    onSubNumber: num => dispatch(subNumber(num)),
    onAddInput: num => dispatch(onAddInput(num)),
    onSubInput: num => dispatch(onSubInput(num)),
    onAsyncAdd: num => dispatch(asyncAddNumber(num))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)