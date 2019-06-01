import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/Login/index.js';
import Register from './pages/Register/index.js';
import Home from './pages/Home/index.js'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/home' component={Home} />
      </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
