import React from 'react';
import { Link } from "react-router-dom";

export class LoginPage extends React.Component {
    render() {
        return (
            <div className="Login">
                <h2>Login</h2>
                <div style={{marginTop: 80}}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/category">CategoryPage</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}