import React, { Component } from 'react';
import logo from '../../assets/logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default Header;
