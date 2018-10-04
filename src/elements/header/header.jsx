import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import { fakeLogin } from "../../auth";
import { LoginButton } from '../../elements/buttons';
import { UserAccount } from '../../elements/user-account';
import './header.css';

class HeaderComponent extends Component {
    handleClick = () => this.props.history.push('/category/new-task/');

    render() {
        const { isLogin } = fakeLogin;
        const buttonText = 'Create new task';

        return (
            <header className="Todo-header">
                <div className="Todo-header__column Todo-header__column--3">
                    {isLogin &&
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleClick}
                        >
                            {buttonText}
                        </Button>
                    }
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

export const Header = withRouter(HeaderComponent);