import React, { Component } from 'react';
import logo from 'assets/logo.png';
import invertedLogo from 'assets/logo-inverted.png';

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
          <a href="/">
            <img
              src={this.state.scrolled ? invertedLogo : logo }
              className={'Header-logo' + (this.state.scrolled ? ' is-inverted' : '')}
              alt="logo" />
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
