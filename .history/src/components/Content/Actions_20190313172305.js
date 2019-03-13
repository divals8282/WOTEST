import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import { connect } from 'react-redux';

const urlBlock = {display:'inline-block',marginTop:'10px',position:'relative',top:'4px'}

const MethodStyle = { padding: '5px', backgroundColor: 'rgb(62, 114, 138)', color: 'white',}
const BasePathStyle = {backgroundColor: 'rgb(83, 83, 83)',color: 'white',padding: '5px 0px 5px 5px',}
const Action = {padding: '5px 5px 5px 0px',color: 'white',backgroundColor: 'rgb(222, 83, 83)',}
const FabStyle = {display:'inline-block',marginLeft:'50px',backgroundColor:'rgb(222, 83, 83)',color:'white'}

class Actions extends Component {

    render() {
        return (
            <>
                <Grid item lg={12} md={12} sm={12} xs={12} className="block">
                    <div style={urlBlock}>
                        <span style={MethodStyle}> GET </span>
                        <span style={BasePathStyle}> http://api.wo.softberg.org?action=</span>
                        <span style={Action}>user_getUserData</span>
                    </div>
                    <Fab style={FabStyle}>Go</Fab>
                </Grid>
            </>
        )
    }
}

const mapStateToProps = ({Actions}) => {
    console.log(Actions.currentAction);
    return {
        currentAction:Actions.currentAction
    }
}

export default connect(mapStateToProps)(Actions);