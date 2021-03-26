import ActionTypes from './types';

export const todo = (title, detail) => {
  // console.log('Title : ', title);
  // console.log('Detail : ', detail);
  return {
    type: ActionTypes.ADD_TODO,
    payload: {title, detail},
  };
};
