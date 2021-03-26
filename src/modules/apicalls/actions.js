import ApiTypes from './types';
export const listing = () => async (dispatch) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
  });
  const data = await response.json();
  dispatch({
    type: ApiTypes.List_Api,
    payload: data,
  });
};

export const update = (data) => async (dispatch) => {
  const id = data.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  const newdata = await response.json();
  console.log('Updated Data Successfully ', newdata);
  dispatch({
    type: ApiTypes.Edit_Api,
    payload: newdata,
  });
};

export const deleteData = (id) => async (dispatch) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      method: 'DELETE',
    },
  );
  const data = await response.json();
  console.log('Successfully delete data');
  dispatch({
    type: ApiTypes.Delete_Api,
    payload: data,
  });
};
export const add = (data) => async (dispatch) => {
  // console.log('ABC ', data);
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  const newdata = await response.json();
  dispatch({
    type: ApiTypes.Add_Api,
    payload: {...newdata, ...data},
  });
};
