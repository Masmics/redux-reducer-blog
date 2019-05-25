import {
  createPost,
  CREATE_POST,
  deletePost,
  DELETE_POST
} from './postActions';

describe('post actions', () => {
  it('handles post adding', () => {
    expect(createPost('Test post', 'Its content')).toEqual({
      type: CREATE_POST,
      payload: { title: 'Test post', body: 'Its content' }
    });
  });

  it('handles post removing', () => {
    expect(deletePost(0)).toEqual({
      payload: 0,
      type: DELETE_POST
      
    });
  });
});
