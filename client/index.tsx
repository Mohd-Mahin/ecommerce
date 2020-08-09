import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddProduct from "./pages/admin/add-product";
import Home from "./pages/shop/home";
import Products from "./pages/shop/products";
import Order from "./pages/shop/order";
import { Theme } from "./component/context/theme";
import AdminProducts from "./pages/admin/products";

const theme = {
  light: "#EFF6F2",
  dark: "#349B60",
  fontColor: "#fff",
  card: {
    bg: "#E1E8DE",
    header: "#C92C2C",
    font: "#000",
  },
};

function Routes() {
  return (
    <Theme.Provider value={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/shop/products">
            <Products />
          </Route>
          <Route exact path="/shop/order">
            <Order />
          </Route>
          <Route exact path="/admin/add-product">
            <AddProduct />
          </Route>
          <Route exact path="/admin/products">
            <AdminProducts />
          </Route>
          <Route exact path="*" component={() => <h2>Not Found...</h2>} />
        </Switch>
      </Router>
    </Theme.Provider>
  );
}

ReactDOM.render(<Routes />, document.getElementById("root"));
