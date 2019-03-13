import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Title from '../Title';
import ArrowRight from '@material-ui/icons/ArrowRight';

const HeaderStyle = {
    background: 'rgb(62, 114, 138)',
    padding: '10px',
    color: 'white',
    height: '30px',
    width: '100%',
    position: 'fixed',
    zIndex: '5'
}

const LogOut = {
    float: 'right',
    lineHeight: '32px',
    marginRight: '15px'
}

const LogOutIconStyle = {
    fontSize: '35px',
    verticalAlign: 'top'
}

const TitleStyle = {
    lineHeight: '30px',
    marginBottom: '3px'
}

export default class Header extends Component {
    logOut() {
        console.log(this);l
        // localStorage.removeItem('userInfo');

    }
    render() {
        return (
            <div style={HeaderStyle}>
                <Grid container>
                    <Grid item md={12} sm={8} xs={10} lg={12}>
                        <Grid container>
                            <Grid item md={11} sm={11} xs={11} lg={11} >
                                <Title style={TitleStyle} />
                            </Grid>
                            <Grid item md={1} sm={1} xs={1} lg={1} >
                                <span onClick={this.logOut} style={LogOut}>LogOut <ArrowRight style={LogOutIconStyle} /> </span>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}