import ApiTypes from './types';
const initialState = {
  list: [],
};
export default function ApiReducer(state = initialState, action) {
  //console.log('Action ', action);
  switch (action.type) {
    case ApiTypes.List_Api:
      return {
        list: action.payload,
      };
    case ApiTypes.Edit_Api:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case ApiTypes.Add_Api:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case ApiTypes.Delete_Api:
      return {
        list: state.list.filter((item) => {
          console.log('IDDDD ', item.id, action.payload);
          return item.id !== action.payload;
        }),
      };
    default:
      return state;
  }
}
