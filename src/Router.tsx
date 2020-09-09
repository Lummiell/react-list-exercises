import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Sets from "./Pages/Sets";
import Josephus from "./Pages/Josephus";
import Polynomials from "./Pages/Polynomials";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Sets" component={Sets} />
        <Route path="/Josephus" component={Josephus} />
        <Route path="/Polynomials" component={Polynomials} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
