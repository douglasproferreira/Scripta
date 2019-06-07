import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './Professor/pages/Home/';
import Class from './Professor/pages/Class/';
import Login from './pages/Login/';
import Register from './pages/Register/';
import Dashboard from './Professor/pages/Dashboard/'


class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/home' component={Home} />
        <Route path='/class' component={Class}/>
        <Route path='/dashboard' component={Dashboard}/>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
