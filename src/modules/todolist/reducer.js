import ActionTypes from './types';
const initialState = {
  list: [],
};
export default function todoReducer(state = initialState, action) {
  console.log('Action : ', action);
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    default:
      return state;
  }
}
