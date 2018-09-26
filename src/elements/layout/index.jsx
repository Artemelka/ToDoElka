import React, { Component, Fragment } from "react";
import { Link, Route } from "react-router-dom";

import { Home, Login, CategoryPage } from '../../pages';
import { PrivateRoute } from '../../elements/private-router';

export class Layout extends Component {
    render() {
        return (
            <Fragment>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/category">CategoryPage</Link>
                    </li>
                </ul>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <PrivateRoute path="/category" component={CategoryPage}/>
            </Fragment>
        );
    }
}