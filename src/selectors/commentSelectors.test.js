import { getComments } from './commentSelectors';

describe('comment selector', () => {
  it('gets comments by post Id', () => {
    const state = {
      comments: {
        1: ['Comment1', 'Comment1 content']
      }
    };
    expect(getComments(state, 1)).toEqual(['Comment1', 'Comment1 content']);
  });
});
