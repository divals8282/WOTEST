import React from 'react';
import Grid from '@material-ui/core/Grid';
import Title from '../Title';
import ArrowRight from '@material-ui/icons/ArrowRight';

const HeaderStyle = {
    background: 'rgb(62, 114, 138)',
    padding: '10px',
    color: 'white'
}

const LogOut = {
    float: 'right',
    lineHeight:'32px'
}

const LogOutIconStyle = {
    fontSize: '35px',
    verticalAlign:'top'
}

export default () => {
    return (
        <Grid container style={HeaderStyle}>
            <Grid item md={12} sm={12} xs={12} lg={12}>
                <Grid container>
                    <Grid item md={11} sm={11} xs={11} lg={11} >
                        <Title />
                    </Grid>
                    <Grid item md={1} sm={1} xs={1} lg={1} >
                        <span style={LogOut}>LogOut <ArrowRight style={LogOutIconStyle} /> </span>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
