export const ADD_POST = 'ADD_POST';
export const addPost = post => ({
  type: ADD_POST,
  payload: post
});

export const REMOVE_POST = 'REMOVE_POST';
export const removePost = () => ({
  type: REMOVE_POST
});
