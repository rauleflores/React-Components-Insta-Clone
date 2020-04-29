// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.comments)

  return (
    <div>
      {
        comments.map( (item, index) => {
          return <Comment comments={item} key={index}/>
        })
      }
      <CommentInput />
    </div>
  );
};

export default CommentSection;
