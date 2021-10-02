import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Comments = (props) => {
  const { id } = props.match.params;

  const [name, setname] = useState({});
  const [info, setinfo] = useState({});
  const [post, setposts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        const result = response.data;
        setname(result);
      }) //success
      .catch((error) => {
        alert(error.message);
      }); //error
  }, []);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        const result = response.data;
        setinfo(result);
      }) //success
      .catch((error) => {
        alert(error.message);
      }); //error
  }, []);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
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
      <h1>username-{name.name}</h1>
      <h2>TITLE-{info.title}</h2>
      <h3>Body-{info.body}</h3>
      <hr />
      <h3>COMMENTS</h3>
      {post.map((ele) => {
        return <li key={ele.id}>{ele.body}</li>;
      })}
      <hr />
      <Link to={`/users/${id}`}>More posts of author{name.name}</Link>
    </div>
  );
};

export default Comments;
