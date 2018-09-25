import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { fakeLogin } from '../../../auth';

class LoginButtonComponent extends Component {
    handleClick = () => {
        const method = fakeLogin.isLogin ? 'logout' : 'login';
        const url = fakeLogin.isLogin ? '/login' : '/';

        fakeLogin[method](() => this.props.history.push(url));
    };

    render() {
        const buttonText = fakeLogin.isLogin ? 'Sign out' : 'Login';

        return <button onClick={this.handleClick} >{buttonText}</button>;
    }
}

export const LoginButton = withRouter(LoginButtonComponent);