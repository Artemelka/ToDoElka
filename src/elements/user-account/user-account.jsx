import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { fakeLogin } from '../../auth';

const anchorOrigin = {
    vertical: 'top',
    horizontal: 'right',
};
const transformOrigin = {
    vertical: 'top',
    horizontal: 'right',
};

class UserAccountComponent extends Component {
    state = {
        anchorEl: null
    };

    handleMenu = event => this.setState({ anchorEl: event.currentTarget });

    handleClose = () => this.setState({ anchorEl: null });

    handleLogout = () => fakeLogin.logout(() => this.props.history.push('/login'));

    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className="UserAccount">
                <IconButton
                    aria-owns={open ? 'menu-appbar' : null}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={anchorOrigin}
                    transformOrigin={transformOrigin}
                    open={open}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                    <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                </Menu>
            </div>
        );
    }
}

export const UserAccount = withRouter(UserAccountComponent);