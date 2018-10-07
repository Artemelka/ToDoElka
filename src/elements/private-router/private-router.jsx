import React from "react";
import { connect } from 'react-redux';
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = connect(store => ({services: store.services}))(
    ({component: Component, services, ...rest}) => {
        const login = services.isLogin;
        const resultComponent = (props) => login
            ? <Component {...props} />
            : <Redirect  to={{pathname: "/login", state: {from: props.location}}} />;

        return <Route {...rest} render={resultComponent} />
    }
);