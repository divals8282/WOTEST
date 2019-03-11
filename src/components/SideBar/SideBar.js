import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import '../../styles/SideBar.css';
class SideBar extends Component {
    render() {
        return (
            <Grid item lg={2} md={2} sm={2} xs={2} className="SideBar">
                <div className="sidebar-title">
                    <p>Actions</p>
                </div>

                <div className="action-list">
                <div className="action">
                    <span>Name</span>
                </div>
                </div>
            </Grid>
        )
    }
}

export default SideBar;