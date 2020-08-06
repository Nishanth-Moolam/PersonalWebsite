import React from "react";
import { Route } from "react-router-dom";
import CommentList from "./components/CommentList";
import CommentDetail from "./components/CommentDetail";
import Login from "./components/Login";
import Signup from "./components/Signup";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={CommentList} />{" "}
    <Route exact path="/comment/:comment_id" component={CommentDetail} />{" "}
    <Route exact path="/login" component={Login} />{" "}
    <Route exact path="/signup" component={Signup} />{" "}
  </div>
);

export default BaseRouter;
