import { addComment, ADD_COMMENT, removeComment, REMOVE_COMMENT } from './commentActions';

describe('comment actions', () => {
  it('add comment action', () => {
    expect(addComment(0, 'Comment content')).toEqual({
      type: ADD_COMMENT,
      payload: { postId: 0, comment: 'Comment content' }
    });
  });

  it('remove comment action', () => {
    expect(removeComment(0, 1)).toEqual({
      type: REMOVE_COMMENT,
      payload: { postId: 0, commentId: 1 }
    });
  });
});
