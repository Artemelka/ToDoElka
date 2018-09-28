import React, { Component } from 'react';

import { fakeLogin } from "../../auth";
import { LoginButton, MenuButton } from '../../elements/buttons';
import { UserAccount } from '../../elements/user-account';
import './header.css';

export class Header extends Component {
    render() {
        const { isLogin } = fakeLogin;

        return (
            <header className="Todo-header">
                <div className="Todo-header__column Todo-header__column--3">
                    {isLogin && <MenuButton />}
                </div>
                <div className="Todo-header__column Todo-header__column--3 Todo-header__column--center">
                    <h2 className="Todo-header__heading">
                        {isLogin ? 'Hello User' : 'ToDoElka'}
                    </h2>
                </div>
                <div className="Todo-header__column Todo-header__column--3 Todo-header__column--right">
                    <div className="Todo-header__user">
                        {isLogin && <UserAccount />}
                        {!isLogin &&
                            <div className="Todo-header__button-wrapper">
                                <LoginButton/>
                            </div>
                        }
                    </div>
                </div>
            </header>
        )
    }
}

