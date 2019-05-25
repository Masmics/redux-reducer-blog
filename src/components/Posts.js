import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function Posts({ posts, deletePost }) {
  const postsList = posts.map(post => (
    <li key={post.id}>
      <Post deletePost={deletePost} post={post} />
    </li>
  ));

  return (
    <ul>{postsList}</ul>
  );
}
Posts.propTypes = {
  deletePost: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string
  })).isRequired
};

export default Posts;

