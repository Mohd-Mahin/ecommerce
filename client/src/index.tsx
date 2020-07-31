import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Product } from "./product";
import { Order } from "./order";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home-page" component={App} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/order" component={Order} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<Routes />, document.getElementById("root"));
