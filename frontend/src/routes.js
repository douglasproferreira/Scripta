import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './Professor/pages/Home/';
import HomeAluno from './Aluno/pages/Home/';
import Class from './Professor/pages/Class/';
import ClassAluno from './Aluno/pages/Classroom';
import Login from './pages/Login/';
import Register from './pages/Register/';
import Dashboard from './Professor/pages/Dashboard/'
import DashboardAluno from './Aluno/pages/Dashboard/'



class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/home' component={Home} />
        <Route path='/homeAluno' component={HomeAluno} />
        <Route path='/class' component={Class}/>
        <Route path='/classAluno' component={ClassAluno}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/dashboardAluno' component={DashboardAluno}/>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
