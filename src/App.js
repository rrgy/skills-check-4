import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav'
import routes from './routes'
import { withRouter } from 'react-router-dom'



class App extends Component {


  render() {
    return (

      <div className="App">
        {this.props.location.pathname !== '/' ? <Nav /> : null}
        {routes}
      </div>
    );
  }
}

export default withRouter(App);
