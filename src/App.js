import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import FirstRoute from './components/FirstRoute.js';
import SecondRoute from './components/SecondRoute.js';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Link to='/'><span>Home</span></Link>
          <br/>
          <Link to='/second'><span>Second</span></Link>
        </div>
        <Switch>
          <Route path='/' component={FirstRoute} exact />
          <Route path='/second' component={SecondRoute} />
        </Switch>
      </div>
    );
  }
}
