import reducer from './commentReducer';
import { createComment, deleteComment } from '../actions/commentActions';
import { deletePost } from '../actions/postActions';

describe('comment reducer', () => {
  it('adds a comment', () => {
    const newState = reducer({}, createComment(1, 'Comment content'));

    expect(newState).toEqual({
      1: ['Comment content']
    });
  });

  it('removes a comment', () => {
    const initialState = {
      1: ['Comment content']
    };
    const newState = reducer(initialState, deleteComment(1, 0));

    expect(newState).toEqual({
      1: []
    });
  });

  it('helps delete a post', () => {
    const initialState = {
      1: ['A Post', 'Its content1'],
      2: ['Here']
    };
    const newState = reducer(initialState, deletePost(1));

    expect(newState).toEqual({
      2: ['Here']
    });
  });
});

