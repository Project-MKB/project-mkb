import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./pages/landing";
import Register from "./pages/register";
import Login from "./pages/login";
import InitialPref from "./pages/initialpref";
import Main from "./pages/main";
import Details from "./pages/details";
import PageNotFound from "./pages/404";
import CreateRecipe from "./pages/createRecipe";
import { Provider } from "react-redux";
import store from "./redux/store";
import jwtDecode from "jwt-decode";
import { signoutUser, getUser } from "./redux/actions/userActions";
import axios from "axios";

// see if user is logged in when app is first launched
// or when browser is refreshed by checking the token stored in localStorage
let token = localStorage.token;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    // if there's no valid token, remove all user info from state
    store.dispatch(signoutUser());
    window.location.href = "/login";
  } else {
    // else, get user info
    store.dispatch({ type: "SET_AUTHENTICATED" });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUser());
  }
}

// TODO: should create AuthenticatedRoute / UnauthenticatedRoute components
// AuthenticatedRoute : only allow authenticated user, otherwise redirect to login page (ex. main, details, etc)
// UnauthenticatedRoute : redirect to main page if user is authenticated (ex. login, register, etc)
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
            <Route exact path="/recipe/create" component={CreateRecipe} />
            <Route path="/" component={PageNotFound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
