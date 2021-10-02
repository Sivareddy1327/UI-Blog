import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Posts = (props) => {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const result = response.data;
        setposts(result);
      }) //success
      .catch((error) => {
        alert(error.message);
      }); //error
  }, []);

  return (
    <div>
      <h1>Total posts-{posts.length}</h1>
      {posts.map((ele) => {
        return (
          <li key={ele.id}>
            <Link to={`/comments/${ele.userId}`}>{ele.title}</Link>
          </li>
        );
      })}
    </div>
  );
};

export default Posts;
