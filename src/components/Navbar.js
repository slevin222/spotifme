import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
                <button type="button" className="signInBtn btn btn-outline-success" onClick={() => {
                    window.location = window.location.href.includes('localhost')
                        ? 'http://localhost:8888/login'
                        : 'https://soptifme-backend.herokuapp.com/login'
                }} >Sign in with Spotify</button>
            </nav>
        )
    }
}

export default Navbar;