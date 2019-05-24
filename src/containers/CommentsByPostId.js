import { connect } from 'react-redux';
import Comments from '../components/Comments';
import { getComments } from '../selectors/commentSelectors';
import { removeComment } from '../actions/commentActions';

const mapStateToProps = (state, { postId }) => ({
  comments: getComments(state, postId)
});

const mapDispatchToProps = (dispatch, { postId }) => ({
  removeComment(commentId) {
    dispatch(removeComment(postId, commentId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
