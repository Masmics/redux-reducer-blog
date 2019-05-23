import {
  addPost,
  ADD_POST,
  removePost,
  REMOVE_POST
} from './postActions';

describe('post actions', () => {
  it('handles post adding', () => {
    expect(addPost('Test post', 'Its content')).toEqual({
      type: ADD_POST,
      payload: { title: 'Test post', body: 'Its content' }
    });
  });

  it('handles post removing', () => {
    expect(removePost(0)).toEqual({
      payload: 0,
      type: REMOVE_POST
      
    });
  });
});
