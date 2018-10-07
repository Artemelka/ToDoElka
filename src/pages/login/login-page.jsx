import React from 'react';

import Button from '@material-ui/core/Button';

import { Input } from '../../elements/inputs';
import './login-page.css';

export class LoginPageComponent extends React.Component {
    render() {
        const {
            loginValue, passwordValue, onLoginChange, onPasswordChange, onLogin, buttonDisabled, buttonText
        } = this.props;

        return (
            <div className="Login">
                <p className="Login__text">
                    Enter your login and password
                </p>
                <div className="Login__content">
                    <Input
                        id="login-name"
                        label="Your login"
                        value={loginValue}
                        onChange={onLoginChange}
                    />
                    <Input
                        id="password"
                        label="Your password"
                        value={passwordValue}
                        onChange={onPasswordChange}
                    />
                    <div className="Login__button-wrapper">
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={onLogin}
                            disabled={buttonDisabled}
                        >
                            {buttonText}
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}