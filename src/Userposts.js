import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Userposts = (props) => {
  const [data, setdata] = useState({});
  const [userpost, setuserpost] = useState([]);

  const { id } = props.match.params;
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        const result = response.data;
        setdata(result);
      }) //success
      .catch((error) => {
        alert(error.message);
      }); //error
  }, []);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => {
        const result = response.data;
        setuserpost(result);
      }) //success
      .catch((error) => {
        alert(error.message);
      }); //error
  }, []);

  return (
    <div>
      <h1>username-{data.name}</h1>

      <h2>POSTS WRITTEN BY USER</h2>

      {userpost.map((ele) => {
        return (
          <li key={ele.id}>
            <Link to={`/comments/${ele.userId}`}>{ele.title}</Link>
          </li>
        );
      })}
    </div>
  );
};

export default Userposts;
