//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import DummyData from '../../dummy-data'

console.log(DummyData)
const PostsPage = () => {
    const [data, setData] = useState(DummyData)

  return (
    <div className="posts-container-wrapper">
      {
      /* map through data here to return a Post and pass data as props to Post */
      data.map( data => {
        return Post(data)
      })
      }
    </div>
  );
};

export default PostsPage;
