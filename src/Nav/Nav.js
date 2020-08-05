import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';


function Nav() {
    return (
        <div className="nav-main">
            <div className="nav-text">
                <Link to="/">Home </Link>
                <Link to="/Visit ">Visit</Link>
                <Link to="/History ">History </Link>
                <Link to="/Support ">Support Us </Link>
                <Link to="/Hire ">Hire Us</Link>
            </div>
        </div>
    );
}

export default Nav;