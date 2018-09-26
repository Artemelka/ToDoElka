import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button';

import { fakeLogin } from '../../../auth';

class LoginButtonComponent extends Component {
    handleClick = () => {
        const { history } = this.props;
        const method = fakeLogin.isLogin ? 'logout' : 'login';
        const url = fakeLogin.isLogin ? '/login' : '/';

        fakeLogin[method](() => history.push(url));
    };

    render() {
        const buttonText = fakeLogin.isLogin ? 'Sign out' : 'Login';

        return <Button
            variant="contained"
            color="primary"
            onClick={this.handleClick}
        >
            {buttonText}
        </Button>;
    }
}

export const LoginButton = withRouter(LoginButtonComponent);