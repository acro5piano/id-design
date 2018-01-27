import React, { Component } from 'react';
import logo from 'assets/logo.png';
import invertedLogo from 'assets/logo-inverted.png';
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      scrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.setState({
        scrolled: (window.pageYOffset > window.innerHeight / 2)
      })
    }, false);
  }

  render() {
    return (
      <div className={'Header' + (this.state.scrolled ? ' is-fixed' : '')}>
        <div className="Header-logo">
          <NavLink to="/">
            <img
              src={this.state.scrolled ? invertedLogo : logo }
              className={'Header-logo' + (this.state.scrolled ? ' is-inverted' : '')}
              alt="logo" />
          </NavLink>
        </div>
        <div className="Header-nav">
          <NavLink className="Header-nav-link" to="/works">Works</NavLink>
          <NavLink className="Header-nav-link" to="/career">Career</NavLink>
          <NavLink className="Header-nav-link" to="/contact">Contact</NavLink>
        </div>
      </div>
    );
  }
}
