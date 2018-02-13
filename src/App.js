import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import routes from './routes.js';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Link to='/'><span>First</span></Link>
          <br/>
          <Link to='/second'><span>Second</span></Link>
          {/* <br/>
          <Link to='/third'><span>Third</span></Link> */}
        </div>
        {routes}
      </div>
    );
  }
}
