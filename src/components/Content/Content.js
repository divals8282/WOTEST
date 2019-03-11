import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import '../../styles/Content.css';
class Content extends Component {
    render(){
        return(
            <Grid item lg={10} md={10} sm={10} xs={10} className="Content">
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12}>1</Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>2</Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>3</Grid>
                </Grid>
            </Grid>
        )
    }
}

export default Content