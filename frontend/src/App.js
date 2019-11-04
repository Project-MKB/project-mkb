import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Landing from "./pages/landing";
import Register from "./pages/register";
import Login from "./pages/login";
import InitialPref from "./pages/initialpref";
import Main from "./pages/main";
import Details from "./pages/details";
import Stylesheet from "./pages/stylesheet";
import PageNotFound from "./pages/404";

class App extends Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={ Landing } />
          <Route exact path='/register' component={ Register } />
          <Route exact path='/login' component={ Login } />
          <Route exact path='/onboarding' component={ InitialPref } />
          <Route exact path='/main' component={ Main } />
          <Route exact path='/details' component={ Details } />
          <Route exact path="/stylesheet" component={ Stylesheet } />
          <Route path='/' component={ PageNotFound } />
        </Switch>
      </Router>
    );
  }
}

export default App;
