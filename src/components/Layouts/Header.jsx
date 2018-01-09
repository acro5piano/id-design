import React, { Component } from 'react';
import logo from '../../assets/logo.png';

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-logo">
          <a href="/">
            <img src={logo} className="Header-logo" alt="logo" />
          </a>
        </div>
        <div className="Header-nav">
          <a className="Header-nav-link" href="/works">Works</a>
          <a className="Header-nav-link" href="/collections">Collections</a>
          <a className="Header-nav-link" href="/contact">Contact</a>
          <a className="Header-nav-link" href="/career">Career</a>
        </div>
      </div>
    );
  }
}
