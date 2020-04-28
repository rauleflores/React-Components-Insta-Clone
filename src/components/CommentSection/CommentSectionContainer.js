// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import dummyData from "../../dummy-data";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(dummyData)
  console.log(comments)

  return (
    <div>
      {comments.map( obj => {
        console.log(obj)
        Comment(obj.comments)
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
