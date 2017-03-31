import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './Users.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <div className="app-header center">
          <h1>To do's <i className="fa fa-check" aria-hidden="true"></i></h1>
        </div>
        <Users />
      </div>
    );
  }
}

export default App;
