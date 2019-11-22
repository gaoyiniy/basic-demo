import React from 'react'
import { connect } from 'react-redux'

const Counter = props => {
  const handleIncrement = () => {
    props.dispatch({
      type: 'INCREMENT'
    })
  }
  return (
    <>
      <h1>{props.count}</h1>
      <button onClick={handleIncrement}>+1</button>
      <button>-1</button>
    </>
  )
}

const mapStateToProps = state => ({
  count: state.todos.count
})

export default connect(mapStateToProps)(Counter)
