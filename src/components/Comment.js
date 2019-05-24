import React from 'react';
import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';

function Comment({ id, comment, removeComment }) {
  return (
    <section>
      <p>{comment}</p>
      <FaTrashAlt onClick={removeComment.bind(null, id)} />
    </section>
  );
}
Comment.propTypes = {
  id: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  removeComment: PropTypes.func.isRequired
};
  
export default Comment;
