import { connect } from 'react-redux';
import { createComment } from '../actions/comment_actions.js';
import CommentForm from './comment_form.jsx';

const mapStateToProps = ({ currentUser }) => ({ currentUser });

export default connect(
  mapStateToProps,
  { createComment }
)(CommentForm);
