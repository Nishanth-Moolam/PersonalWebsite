import React from "react";
import { Route } from "react-router-dom";
import Body from "./components/Body";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={Body} />{" "}
  </div>
);

export default BaseRouter;
