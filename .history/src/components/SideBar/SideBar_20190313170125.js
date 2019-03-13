import React, { Component } from 'react';
import '../../styles/SideBar.css';
import { connect } from 'react-redux';

class SideBar extends Component {
    componentDidMount() {
        console.log(this.props);
    }
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

const mapStateToProps = ({ Actions }) => {
    return { Actions }
}

export default connect(mapStateToProps)(SideBar);