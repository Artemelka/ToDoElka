import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';

import { LoginButton } from '../../elements/buttons';
import { UserAccount } from '../../elements/user-account';
import './header.css';

class HeaderComponent extends Component {
    handleClick = () => this.props.history.push('/category/new-task/');

    render() {
        const { user, isLogin } = this.props;
        const buttonText = 'Create new task';
        const headerText = isLogin ? `Hello ${user.name}` : 'ToDoElka';

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
                        {headerText}
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

export const Header = connect(
    store => ({
        user: store.user,
        isLogin: store.services.isLogin
    })
)(withRouter(HeaderComponent));

// export const Header = withRouter(HeaderComponent);