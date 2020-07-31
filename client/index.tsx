import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Order } from "./pages/order";
import { Product } from "./pages/product";
import { Home } from "./pages/home";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/order">
          <Order />
        </Route>
        <Route exact path="/product">
          <Product />
        </Route>
        <Route exact path="*" component={() => <h2>Not Found...</h2>} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<Routes />, document.getElementById("root"));
