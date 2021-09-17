
import { combineReducers } from 'redux';
import hobbiesAndHabitsReducer from './hobbiesAndHabitsReducer';
import ResultReducer from './ResultReducer';
import UserReducer from './UserReducer';
export default combineReducers({
  'hobbiesAndHabits':hobbiesAndHabitsReducer,
  'user':UserReducer,
  'results':ResultReducer
});