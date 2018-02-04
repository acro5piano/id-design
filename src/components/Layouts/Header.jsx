import React, { Component } from 'react';
import logo from 'assets/logo.png';
import invertedLogo from 'assets/logo-inverted.png';
import { Link, NavLink } from 'react-router-dom'

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

  get _shouldInverted() {
    return this.state.scrolled || (window.location.hash !== '#/')
  }

  render() {
    return (
      <div className={'Header' + (this._shouldInverted ? ' is-fixed' : '')}>
        <div className="Header-logo">
          <Link to="/">
            <img
              src={this._shouldInverted ? invertedLogo : logo }
              className={'Header-logo' + (this._shouldInverted ? ' is-inverted' : '')}
              alt="logo" />
          </Link>
        </div>
        <div className="Header-nav">
          <NavLink className="Header-nav-link" to="/works">Works</NavLink>
          <NavLink className="Header-nav-link" to="/career">Career</NavLink>
          <NavLink className="Header-nav-link" to="/contact">Contact</NavLink>
        </div>
      </div>
    )
  }
}
