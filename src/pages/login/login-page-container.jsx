import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import { LoginPageComponent } from './login-page';
import { actionType } from '../../actions/action-type';
import { fakeLogin } from '../../services';
import { testDB } from '../../test-db/test-db';

class LoginPageContainer extends React.Component {
    state = {
        login: '',
        password: ''
    };

    handleLoginChang = (event) => this.setState({ login: event.target.value.toLowerCase()});

    handlePasswordChange = (event) => this.setState({ password: event.target.value});

    handleLogin = () => {
        const { history, logged, addCategory, addTasks, addUser } = this.props;
        const { login, password } = this.state;
        const testLogin = testDB.user.login.toLowerCase() === login.toLowerCase();
        const testPassword = testDB.user.password === password;

        if ( testLogin &&  testPassword) {
            fakeLogin.login((isLogin) => {
                addUser(testDB.user);
                addCategory(testDB.category);
                addTasks(testDB.tasks);

                window.sessionStorage.setItem('category', JSON.stringify(testDB.category));
                window.sessionStorage.setItem('tasks', JSON.stringify(testDB.tasks));

                logged(isLogin);
                history.push('/category');
            }, testDB.user.login);
            this.setState({ login: '', password: '' });
        } else {
            console.log(testLogin);
            console.log(testPassword);
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

export const LoginPage = connect(null,
    dispatch => ({
        logged: isLogin => dispatch({type: actionType.LOGIN, payload: isLogin}),
        addCategory: allCategory => dispatch({type: actionType.ADD_ALL_CATEGORY, payload: allCategory}),
        addTasks: allTasks => dispatch({type: actionType.ADD_ALL_TASKS, payload: allTasks}),
        addUser: user => dispatch({type: actionType.ADD_USER, payload: user})
    })
)(withRouter(LoginPageContainer));