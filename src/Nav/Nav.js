import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './Nav.css';


function Nav() {
    return (
        <div className="nav-main">
            <nav className="navbar">
                <ul className="nav-list">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Visit">Visit</Link>
                    </li>
                    <li>
                        <Link to="/History">History</Link>
                    </li>
                    <li>
                        <Link to="/Support">Support</Link>
                    </li>
                    <li>
                        <Link to="/Hire">Hire</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;