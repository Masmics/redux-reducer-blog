import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

function Comments({ comments, removeComment }) {
  const commentsList = comments.map((comment, i) => (
    <li key={i}>
      <Comment id={i} comment={comment} removeComment={removeComment} />
    </li>
  ));

  return (
    <ul>{commentsList}</ul>
  );
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.string).isRequired,
  removeComment: PropTypes.func.isRequired
};

export default Comments;
