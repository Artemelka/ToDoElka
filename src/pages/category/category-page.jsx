import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Aside, Main } from '../../layouts';
import { fakeLogin } from '../../services';
import {actionType} from '../../actions/action-type';

class CategoryPageComponent extends Component {
    componentDidMount() {
        const { logged, addUser, addCategory, addTasks } = this.props;
        const isAuth = fakeLogin.isAuth();

        if (isAuth) {
            const category = window.sessionStorage.getItem('category');
            const tasks = window.sessionStorage.getItem('tasks');
            const user = JSON.parse(window.sessionStorage.getItem('user'));

            addUser({login: user, name: user});
            addCategory(JSON.parse(category));
            addTasks(JSON.parse(tasks));
            logged(isAuth);
        }
    }

    render() {
        return (
            <div className="Todo-content-layout__inner">
                <Aside />
                <Main />
            </div>
        );
    }
}

export const CategoryPage = connect(null,
    dispatch => ({
        logged: isLogin => dispatch({type: actionType.LOGIN, payload: isLogin}),
        addCategory: allCategory => dispatch({type: actionType.ADD_ALL_CATEGORY, payload: allCategory}),
        addTasks: allTasks => dispatch({type: actionType.ADD_ALL_TASKS, payload: allTasks}),
        addUser: user => dispatch({type: actionType.ADD_USER, payload: user})
    })
)(CategoryPageComponent);