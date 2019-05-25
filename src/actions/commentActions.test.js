import { createComment, CREATE_COMMENT, deleteComment, DELETE_COMMENT } from './commentActions';

describe('comment actions', () => {
  it('add comment action', () => {
    expect(createComment(0, 'Comment content')).toEqual({
      type: CREATE_COMMENT,
      payload: { postId: 0, comment: 'Comment content' }
    });
  });

  it('remove comment action', () => {
    expect(deleteComment(0, 1)).toEqual({
      type: DELETE_COMMENT,
      payload: { postId: 0, commentId: 1 }
    });
  });
});
