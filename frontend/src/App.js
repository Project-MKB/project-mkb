import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./pages/landing";
import Register from "./pages/register";
import Login from "./pages/login";
import InitialPref from "./pages/initialpref";
import Main from "./pages/main";
import Details from "./pages/details";
import PageNotFound from "./pages/404";
import { Provider } from "react-redux";
import store from "./redux/store";
import jwtDecode from "jwt-decode";
import dayjs from "dayjs";

let token = localStorage.token.split("Bearer ")[1];
if (token) {
  token = jwtDecode(token);
  if (token.exp * 1000 < Date.now()) {
    store.dispatch({ type: "SIGNOUT" });
  }
}

class App extends Component {
  render() {
    console.log(dayjs(token.exp * 1000).format());
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/onboarding" component={InitialPref} />
            <Route exact path="/main" component={Main} />
            <Route exact path="/details" component={Details} />
            <Route path="/" component={PageNotFound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
