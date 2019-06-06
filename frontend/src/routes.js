import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './Professor/pages/Home/';
import Class from './Professor/pages/Class/';
import Login from './pages/Login/';
import Register from './pages/Register/';


class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/home' component={Home} />
        <Route path='/class' component={Class}/>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
