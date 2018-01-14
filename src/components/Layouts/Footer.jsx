import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div>
          Copyright 2018  TT &amp; T Archi Lab
        </div>
        <div>
          <a className="Header-nav-link" href="/works">Works</a>
          <a className="Header-nav-link" href="/collections">Collections</a>
          <a className="Header-nav-link" href="/contact">Contact</a>
          <a className="Header-nav-link" href="/career">Career</a>
        </div>
      </div>
    );
  }
}

