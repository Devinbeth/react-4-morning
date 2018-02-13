import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import MyFirstRoute from './components/MyFirstRoute.js';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='' component={MyFirstRoute} />
      </div>
    );
  }
}
