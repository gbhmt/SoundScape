import { connect } from 'react-redux';
import Comment from './comment.jsx';
import { destroyComment } from '../actions/comment_actions.js';

const mapStateToProps = ({ currentUser }) => ({ currentUser });

export default connect(
  mapStateToProps,
  { destroyComment }
)(Comment);
