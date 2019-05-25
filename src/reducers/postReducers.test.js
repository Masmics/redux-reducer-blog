import reducer from './postReducers';
import { createPost, deletePost, updatePost } from '../actions/postActions';

describe(' post reducer', () => {
  it('adds a post', () => {
    const newState = reducer([], createPost('Test post', 'Content'));
    expect(newState).toEqual([
      { title: 'Test post', body: 'Content' }
    ]);
  });

  it('removes a post', () => {
    const initialState = [
      { title: 'Test post0', body: 'Content' },
      { title: 'Test post1', body: 'Content' }
    ]; 
    const newState = reducer(initialState, deletePost(1));
    expect(newState).toEqual([
      { title: 'Test post0', body: 'Content' }
    ]);
  });

  it('updates a post', () => {
    const initialState = [
      { title: 'Test post 1', body: 'Post 1 Content' },
      { title: 'Test post 2', body: 'Post 2 Content' },
      { title: 'Test post 3', body: 'Post 3 Content' }
    ];
    const newState = reducer(initialState, updatePost(1, 'I am updated!'));
    expect(newState).toEqual([
      { title: 'Test post 1', body: 'Post 1 Content' },
      { title: 'Test post 2', body: 'I am updated!' },
      { title: 'Test post 3', body: 'Post 3 Content' }
    ]);
  });
});

