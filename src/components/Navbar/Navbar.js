import React, { Component } from 'react';
import logo from './logo.png';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <header className="Navbar-header">
                <img src={logo} className="Navbar-logo" alt="logo" onClick={this.props.toggleMenu}></img>
                <h1 className="Navbar-title">SPLNTR</h1>
            </header>
        );
    }
}

export default Navbar;
