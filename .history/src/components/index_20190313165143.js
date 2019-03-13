
import React, { Component } from 'react';
import '../styles/index.css';
// Components
import Header from './Layout/Header';
import SideBar from './SideBar/SideBar';
import Content from './Content';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
class Index extends Component{ 
    componentDidMount() {
        if(!localStorage.getItem('userInfo')) {
            this.props.history.push('signIn')
        }
    }
    render() {
        return (
            <>
                <Header />
                <SideBar />
                <Content />
            </>
        )
    }
}



export default withRouter(Index);