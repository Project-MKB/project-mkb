import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

// components
import AuthenticatedRoute from "./components/main/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/main/UnauthenticatedRoute";

// pages
import Landing from "./pages/landing";
import Register from "./pages/register";
import Login from "./pages/login";
import InitialPref from "./pages/initialpref";
import Main from "./pages/main";
import Details from "./pages/details";
import PageNotFound from "./pages/404";
import CreateRecipe from "./pages/createRecipe";
import UpdateRecipe from "./pages/updateRecipe";
import UpdateUser from "./pages/updateUser";

// redux
import { Provider } from "react-redux";
import store from "./redux/store";
import jwtDecode from "jwt-decode";
import { signoutUser, getUser } from "./redux/actions/userActions";

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

// AuthenticatedRoute : only allow authenticated user, otherwise redirect to login page (ex. main, details, etc)
// UnauthenticatedRoute : redirect to main page if user is authenticated (ex. login, register, etc)
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <UnauthenticatedRoute exact path="/register" component={Register} />
            <UnauthenticatedRoute exact path="/login" component={Login} />
            <Route exact path="/onboarding" component={InitialPref} />
            <AuthenticatedRoute exact path="/main" component={Main} />
            <AuthenticatedRoute exact path="/details/:id" component={Details} />
            <AuthenticatedRoute
              exact
              path="/recipe/create"
              component={CreateRecipe}
            />
            <AuthenticatedRoute
              exact
              path="/recipe/update/:id"
              component={UpdateRecipe}
            />
            <AuthenticatedRoute
              exact
              path="/user/update"
              component={UpdateUser}
            />
            <Route path="/" component={PageNotFound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
