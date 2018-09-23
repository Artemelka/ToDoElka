import React, { Component } from 'react';
import { Route } from 'react-router';

import { LoginPage } from './pages/login';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ToDo">
        <Route exact path="/" component={LoginPage} />
      </div>
    );
  }
}

export default App;
