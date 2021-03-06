
import React, { Component } from 'react';
import '../styles/index.css';
// Components
import Header from './Layout/Header';
import SideBar from './SideBar/SideBar';
import Content from './Content';
import { connect } from 'react-redux';

class Index extends Component{ 
    componentDidMount() {
        this.checkUserInfo()
        console.log(1);
    }
    
    checkUserInfo() {
        if(!this.props.User.userInfo) {
            this.props.history.push('signIn')
        }
        return true;
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

const mapStateToProps = (state,dispatch) => {
    return {
        User:state.User
    };
}

export default connect(mapStateToProps)(Index);