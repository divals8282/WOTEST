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
                    {this.props.actions.map((action,index) => {
                        return (
                            <div className="action" key={index}>
                                <span>{action.endPont}</span>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ Actions }) => {
    return {
        actions:Actions.actions
    }
}

export default connect(mapStateToProps)(SideBar);