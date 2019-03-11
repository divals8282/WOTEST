import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import '../../styles/Content.css';

import Actions from './Actions';
import Parameters from './Parameters';
import Response from './Response';

class Content extends Component {
    render(){
        return(
            <div className="Content">
                <Grid container>
                    <Actions/>
                    <Parameters/>
                    <Response/>
                </Grid>
            </div>
        )
    }
}

export default Content