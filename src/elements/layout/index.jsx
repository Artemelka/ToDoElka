import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import { Home, Login, CategoryPage } from '../../pages';
import { PrivateRoute } from '../../elements/private-router';
import './layout.css';

export class Layout extends Component {
    render() {
        return (
            <div className="Todo-content">
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <PrivateRoute path="/category" component={CategoryPage}/>
            </div>
        );
    }
}