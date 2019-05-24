export const getPosts = state => [state.posts].map((post, id) => ({
  ...post,
  id
}));
export const getPostByIndex = (state, id) => getPosts(state)[id];

// get all posts
// get a post by index
