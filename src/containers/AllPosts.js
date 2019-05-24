import { connect } from 'react-redux';
import { getPosts } from '../selectors/postSelectors';
import Posts from '../components/Posts';
import { removePost } from '../actions/postActions';

const mapStateToProps = state => ({
  posts: getPosts(state)
});

const mapDispatchToProps = dispatch => ({
  removePost(id) {
    dispatch(removePost(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);

