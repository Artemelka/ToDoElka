import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";

import { Home, Login, CategoryPage } from '../../pages';
import { PrivateRoute } from '../../elements/private-router';

export class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <PrivateRoute path="/category" component={CategoryPage}/>
            </Fragment>
        );
    }
}