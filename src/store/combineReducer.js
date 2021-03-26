import {combineReducers} from 'redux';
import counterReducer from '../modules/counter/reducer';
import todoReducer from '../modules/todolist/reducer';
export default combineReducers({
  counterReducer: counterReducer,
  todoReducer: todoReducer,
});
