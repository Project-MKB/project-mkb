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
import { signoutUser, getUser } from "./redux/actions/userActions";

// see if user is logged in when app is first launched
// or when browser is refreshed by checking token stored in localStorage
let token = localStorage.token;
if (token) {
  token = jwtDecode(token.split("Bearer ")[1]);
  if (token.exp * 1000 < Date.now()) {
    // if there's no valid token, remove login state
    store.dispatch(signoutUser());
  } else {
    // else, get user info
    store.dispatch(getUser());
  }
}

class App extends Component {
  render() {
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
