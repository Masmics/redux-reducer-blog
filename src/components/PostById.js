import { connect } from 'react-redux';
import { getPostByIndex } from '../selectors/postSelectors';

const mapStateToProps = (state, props) => ({
  post: getPostByIndex(state, props.match.params.id)
});

export default connect({
  mapStateToProps
});

