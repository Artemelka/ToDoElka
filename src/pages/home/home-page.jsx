import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import './home.css';

class HomePageComponent extends Component {
    render() {
        const { isLogin } = this.props;

        return (
            <div className="Home-page">
                <h2 className="Home-page__heading">Welcome in ToDoElka Application</h2>
                <div className="Home-page__content">
                    <p className="Home-page__text">
                        {
                            isLogin
                                ? <span><Link to="/category">Your category</Link></span>
                                : <span><Link to="/login">Login</Link> or <Link to="/Register">Register</Link></span>
                        }
                    </p>
                </div>
            </div>
        );
    }
}

export const HomePage = connect(
    store => ({
        isLogin: store.services.isLogin
    })
)(HomePageComponent);