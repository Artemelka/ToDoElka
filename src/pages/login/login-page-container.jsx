import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import { LoginPageComponent } from './login-page';
import { fakeLogin } from '../../services';
import { actionType } from '../../actions/action-type';

class LoginPageContainer extends React.Component {
    state = {
        login: '',
        password: ''
    };

    handleLoginChang = (event) => this.setState({ login: event.target.value.toLowerCase()});

    handlePasswordChange = (event) => this.setState({ password: event.target.value});

    handleLogin = () => {
        const { user, history, logined } = this.props;
        const { login, password } = this.state;

        if (login.toLowerCase() === user.login.toLowerCase() && password === user.password) {
            fakeLogin.login((isLogin) => {
                logined(isLogin);
                history.push('/category');
            });
            this.setState({ login: '', password: '' });
        }
    };

    render() {
        const { login, password } = this.state;
        const isButtonDisabled = !Boolean(login && password);
        const buttonText = 'login';

        return (
            <LoginPageComponent
                loginValue={login}
                passwordValue={password}
                onLoginChange={this.handleLoginChang}
                onPasswordChange={this.handlePasswordChange}
                onLogin={this.handleLogin}
                buttonText={buttonText}
                buttonDisabled={isButtonDisabled}
            />
        );
    }
}

export const LoginPage = connect(
    store => ({
        user: store.user,
        services: store.services
    }),
    dispatch => ({
        logined: isLogin => dispatch({type: actionType.LOGIN, payload: isLogin})
    })
)(withRouter(LoginPageContainer));