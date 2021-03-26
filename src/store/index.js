import {createStore} from 'redux';
import rootReducer from './combineReducer';
// import reducer from '../modules/counter/reducer';
// const store = createStore(reducer);

//const store = createStore(rootReducer);

import reducer from '../modules/todolist/reducer';
const store = createStore(reducer);

console.log(store.getState());
export default store;
