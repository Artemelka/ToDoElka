import React, { Component } from 'react';
import { connect } from 'react-redux';

import { NewTaskButton, LoginButton } from '../../elements/buttons';
import { UserAccount } from '../../elements/user-account';
import './header.css';

class HeaderComponent extends Component {
    render() {
        const { user, isLogin } = this.props;
        const headerText = isLogin ? `Hello ${user.name}` : 'ToDoElka';

        return (
            <header className="Todo-header">
                <div className="Todo-header__column Todo-header__column--3">
                    {isLogin && <NewTaskButton />}
                </div>
                <div className="Todo-header__column Todo-header__column--3 Todo-header__column--center">
                    <h2 className="Todo-header__heading">
                        {headerText}
                    </h2>
                </div>
                <div className="Todo-header__column Todo-header__column--3 Todo-header__column--right">
                    <div className="Todo-header__user">
                        {isLogin && <UserAccount />}
                        {/*{!isLogin &&*/}
                        {/*<div className="Todo-header__button-wrapper">*/}
                            {/*<LoginButton/>*/}
                        {/*</div>*/}
                        {/*}*/}
                    </div>
                </div>
            </header>
        )
    }
}

export const Header = connect(
    store => ({
        user: store.user,
        isLogin: store.services.isLogin
    })
)(HeaderComponent);