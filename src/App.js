import React, { Component, Fragment } from 'react';

import { Header } from './elements/header';
import { Layout } from './elements/layout';

import './App.css';

export class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Layout />
      </Fragment>
    );
  }
}

