import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SingIn from "./Components/SignIn/SignIn";
import App from "./App";
import Recommendation from './Recommendation';
// import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={SingIn} />
      <Route path="/success" component={Recommendation} />
      {/* <Route component={NotFound} /> */}
    </Switch>
  </BrowserRouter>
);

export default Router;
