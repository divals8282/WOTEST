import React, { Component } from 'react';

// components
import SignIn from './components/SignIn';
import Index from './components/index';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Route path="/" exact component={Index} />
            <Route path="/signIn" component={SignIn} />
          </div>
        </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    Actions:state.actions
  }
}

export default connect(mapStateToProps)(App);
