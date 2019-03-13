
import React, { Component } from 'react';
import '../styles/index.css';
// Components
import Header from './Layout/Header';
import SideBar from './SideBar/SideBar';
import Content from './Content';
import { connect } from 'react-redux';

class Index extends Component{ 
    componentDidMount() {
        if(!localStorage.getItem('userInfo')) {
            this.props.history.push('signIn')
        }
    }
    render() {
        console.log(this.props);
        return (
            <>
                <Header />
                <SideBar />
                { this.props.currentAction &&
                    <Content />
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        User:state.User,
        currenAction:state.Actions.currentAction
    };
}

export default connect(mapStateToProps)(Index);