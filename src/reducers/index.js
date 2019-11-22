import { combineReducers } from 'redux'
import commons from './common'
import todos from './todos'

export default combineReducers({ commons, todos })
