import React from "react";
import { Route, Redirect } from "react-router-dom";
import { fakeLogin } from "../../services";

export const PrivateRoute = ({component: Component, ...rest}) => {
    const resultComponent = (props) => fakeLogin.isLogin
        ? <Component {...props} />
        : <Redirect  to={{pathname: "/login", state: {from: props.location}}} />;

    return <Route {...rest} render={resultComponent} />
};