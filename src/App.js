import React from "react";
import { Link, Route } from "react-router-dom";
import Comments from "./Comments";
import Posts from "./Posts";
import Userlist from "./Userlist";
import Userposts from "./Userposts";

const App = (props) => {
  return (
    <div>
      <h1>Listing users</h1>
      <Link to="/">Home</Link> | <Link to="/userlist">users</Link> |{" "}
      <Link to="/posts">posts</Link>
      <Route path="/userlist" component={Userlist} exact={true} />
      <Route path="/posts" component={Posts} exact={true} />
      <Route path="/users/:id" component={Userposts} exact={true} />
      <Route path="/comments/:id" component={Comments} exact={true} />
    </div>
  );
};

export default App;
