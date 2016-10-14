import React from 'react';
import { Link } from 'react-router';

const Comment = (props) => {
  let button;
  if (props.currentUser && props.currentUser.id === props.comment.author_id) {
    button = <button className="delete-comment"
      onClick={ () => props.destroyComment(props.comment)}>
      <img className="delete-icon" src={ window.SoundScapeAssets.deleteIcon }/>
    </button>;
  }
  const authorUrl = `users/${props.comment.author_id}`;
  return (
    <li className="comment-container group">
      <Link to={ authorUrl }>
        <img className="comment-badge" src={ props.comment.author_profile_picture_url }/>
      </Link>
      <div className="author-and-body">
        <Link to={ authorUrl }>
          <span className="comment-name">{ props.comment.author_display_name }</span>
        </Link>
        <span className="comment-body">{ props.comment.body }</span>
      </div>
      <div className="timestamp-and-delete">
        <span className="timestamp">{ props.comment.created_at }</span>
        { button }
      </div>
    </li>
  );


};

export default Comment;
