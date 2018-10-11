import React, { Component, Fragment } from 'react';

import { Header, Layout } from './layouts';
import { Loader } from './elements/loader';
import { Notification } from './elements/notification';

import './App.css';

export class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Layout />
                <Loader />
                <Notification/>
            </Fragment>
        );
    }
}

