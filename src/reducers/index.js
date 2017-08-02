import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import mystore from './mystore'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  mystore
})

export default todoApp