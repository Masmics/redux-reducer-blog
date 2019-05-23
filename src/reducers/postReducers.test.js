import reducer from './postReducers';
import { addPost, removePost } from '../actions/postActions';

describe(' post reducer', () => {
  it('adds a post', () => {
    const newState = reducer([], addPost('Test post', 'Content'));
    expect(newState).toEqual([
      { title: 'Test post', body: 'Content' }
    ]);
  });

  it('removes a post', () => {
    const initialState = [
      { title: 'Test post0', body: 'Content' },
      { title: 'Test post1', body: 'Content' }
    ]; 
    const newState = reducer(initialState, removePost(1));
    expect(newState).toEqual([
      { title: 'Test post0', body: 'Content' }
    ]);
  });
});

