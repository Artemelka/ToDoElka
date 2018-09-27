import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
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