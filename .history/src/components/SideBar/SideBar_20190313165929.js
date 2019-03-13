import React, { Component } from 'react';
import '../../styles/SideBar.css';
import { connect } from 'react-redux';

class SideBar extends Component {
    render() {
        return (
            <div className="SideBar">
                <div className="sidebar-title">
                    <p>Actions</p>
                </div>
                <div className="action-list">
                <div className="action">
                    <span>Name</span>
                </div>
                </div>
            </div>
        )
    }
}

export default SideBar;