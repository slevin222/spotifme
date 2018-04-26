import React, { Component } from 'react';
import Navbar from './Navbar';
import homeImage from '../homeImage.jpg';

class SignIn extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <div className="homeImage" style={{ backgroundImage: "url(" + homeImage + ")" }}>
                </div>
            </div>
        )
    }
}

export default SignIn;

