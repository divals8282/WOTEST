import React, { Component } from 'react';
import '../styles/SignIn.css'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Title from './Title';
const textFieldStyle = {
    width: '100%',
    margin: '0px 0px 20px 0px',
}

const buttonStyle = {
    width:'100%',
    padding:'10px',
}

class SignIn extends Component {
    render() {
        return (
            <div className="SignIn">
                <div className="Header">
                    <Title />
                </div>
                <div className="Content">
                    <TextField style={textFieldStyle} placeholder="Login" />
                    <TextField style={textFieldStyle} placeholder="Password" type="password" />
                </div>
                <div className="Footer">
                    <Button variant="contained" style={buttonStyle}>Sign In</Button>
                </div>
            </div>
        )
    }
}

export default SignIn;