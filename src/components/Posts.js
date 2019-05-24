import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function Posts({ posts, removePost }) {
  const postsList = posts.map(post => {
    <li key={post.id}>
      <Post removePost={removePost} post={post} />
    </li>;
  });

  return (
    <ul>{postsList}</ul>
  );
}
Posts.propTypes = {
  removePost: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string
  })).isRequired
};

export default Posts;

