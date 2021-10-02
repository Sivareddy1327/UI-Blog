import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";

const Userlist = (props) => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const result = response.data;
        setusers(result);
      }) //success
      .catch((error) => {
        alert(error.message);
      }); //error
  }, []);

  return (
    <div>
      <h1>User Listing-{users.length}</h1>
      {users.map((ele) => {
        return (
          <li key={ele.id}>
            <Link to={`/users/${ele.id}`}>{ele.name}</Link>
          </li>
        );
      })}
    </div>
  );
};

export default Userlist;
