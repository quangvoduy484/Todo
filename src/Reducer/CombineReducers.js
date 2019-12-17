import { combineReducers } from 'redux'
import {showHideButton} from './ShowHideButton'
import {Todo} from './Todo'
import {VisibilityFilter} from './VisibilityFilter'
export const rootReducer = combineReducers({
    showHideButton,
    Todo,
    VisibilityFilter
  })
  
