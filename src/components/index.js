
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import '../styles/index.css';
// Components
import Header from './Layout/Header';
import SideBar from './SideBar/SideBar';
import Content from './Content';
class Index extends Component{ 

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

export default Index;