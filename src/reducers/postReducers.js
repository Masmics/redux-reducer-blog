import { ADD_POST, REMOVE_POST } from '../actions/postActions';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POST:
      return { ...state, post: action.payload };
  }
  switch(action.type) {
    case REMOVE_POST:
      return { ...state, post: null };
  }
}
