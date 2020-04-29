// You do not need to do anything in this file. Look at the CommentSection file. 

import React from 'react';
import './Comment.css';

const Comment = props => {
  console.log(props)
  return (
    <div className="comment-text">
      <span className="user">{props.comments.username}</span>
      {' '}
      <span className="comment">{props.comments.text}</span>
    </div>
  );
};


export default Comment;
