import React, { Component } from 'react';
import homeImage from '../homeImg.jpg';

class SignIn extends Component {

    render() {
        return (
            <div className="homeImage" style={{ backgroundImage: "url(" + homeImage + ")" }}>
                <button className="signInBtn" onClick={() => {
                    window.location = window.location.href.includes('localhost')
                        ? 'http://localhost:8888/login'
                        : 'https://soptifme-backend.herokuapp.com/login'
                }} >Sign in with Spotify</button>
            </div>
        )
    }
}

export default SignIn;
