import reducer from './commentReducer';
import { addComment, removeComment } from '../actions/commentActions';
import { removePost } from '../actions/postActions';

describe('comment reducer', () => {
  it('adds a comment', () => {
    const newState = reducer({}, addComment(1, 'Comment content'));

    expect(newState).toEqual({
      1: ['Comment content']
    });
  });

  it('removes a comment', () => {
    const initialState = {
      1: ['Comment content']
    };
    const newState = reducer(initialState, removeComment(1, 0));

    expect(newState).toEqual({
      1: ['Comment content']
    });
  });

  it('helps delete a post', () => {
    const initialState = {
      1: ['A Post', 'Its content1'],
      2: ['Here']
    };
    const newState = reducer(initialState, removePost(1));

    expect(newState).toEqual({
      2: ['Here']
    });
  });
});

