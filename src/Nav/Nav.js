import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './Nav.css';


function Nav() {
    return (
        <div className="nav-main">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-brand"><Link to="/">Victoria Baths</Link></div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <div className="nav-link"><Link to="/Visit">Visit</Link></div>
                        <div className="nav-link"><Link to="/History">History</Link></div>
                        <div className="nav-link"><Link to="/Support">Support</Link></div>
                        <div className="nav-link"><Link to="/Hire">Hire</Link></div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;