import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { withRouter } from "react-router-dom";

import { Payment } from "./pages/Payment";
import { Result } from "./pages/Result";
import Demo from "./pages/demo";

export const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={withRouter(Home)} />
      <Route path="/payment" component={withRouter(Payment)} />
      <Route path="/result" component={withRouter(Result)} />
      <Route path="/demo" component={withRouter(Demo)} />
    </div>
  </Router>
);
