import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';

class Parameters extends Component {
    render() {
        console.log(this.props);
        return (
            <>
            <Grid item lg={12} md={12} sm={12} xs={12} className="block">2</Grid>
            </>
        )
    }
}

const mapStateToProps = ({ Actions }) => {
    const { actions } = Actions
    return {
        actions
    }
}

export default connect(mapStateToProps)(Parameters);