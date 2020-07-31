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
        <Route exact path="/" component={App} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/order" component={Order} />
        <Route exact path="*" component={() => <h2>Not Found...</h2>} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<Routes />, document.getElementById("root"));
