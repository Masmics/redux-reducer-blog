import { getPosts, getPostByIndex } from './postSelectors';

describe('post selectors', () => {
  it('gets all posts', () => {
    const state = {
      posts: [
        { title: 'PostA', body: 'I am A!' },
        { title: 'PostB', body: 'I am B!' }
      ]
    };

    expect(getPosts(state)).toEqual([
      { id: 0, title: 'PostA', body: 'I am A!' },
      { id: 1, title: 'PostB', body: 'I am B!' }
    ]);
  });

  it('gets post by index', () => {
    const state = {
      posts: [
        { title: 'Post1', body: 'I am post 1!' },
        { title: 'Post2', body: 'I am post 2!' }
      ]
    };

    expect(getPostByIndex(state, 0)).toEqual({ id: 0, title: 'Post1', body: 'I am post 1!' });
  });
});
