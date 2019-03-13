import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';

class Parameters extends Component {
    render() {
        return (
            <>
            <Grid item lg={12} md={12} sm={12} xs={12} className="block">2</Grid>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)

    return {}
}

export default connect()(Parameters);