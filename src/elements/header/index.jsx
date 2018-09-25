import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { LoginButton } from '../../elements/buttons';
import './header.css';

export class Header extends Component {
    render() {
        return (
            <header className="Todo-header">
                <div className="Todo-header__logo">
                    <h3>ToDoElka</h3>
                </div>
                <div className="Todo-header__heading">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/category">CategoryPage</Link>
                        </li>
                    </ul>
                </div>
                <div className="Todo-header__user">
                    <LoginButton/>
                </div>
            </header>
        )
    }
}