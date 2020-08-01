import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";

import Home from "./components/home";
import Stores from "./components/stores";
import Restaurants from "./components/restaurants";
import PageNotFound from "./components/PageNotFound";

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/stores" component={Stores} />
        <Route exact path="/restaurants" component={Restaurants} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.register();
