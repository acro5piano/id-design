import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div>
          <div>
            TT &amp; T Archi Lab<br />
            〒150-0034 東京都渋谷区代官山町17-1　アドレス代官山A棟3307<br />
            mail@ttntarchilab.com
          </div>
        </div>
        <div>
          <Link className="Header-nav-link" to="/works">Works</Link>
          <Link className="Header-nav-link" to="/contact">Contact</Link>
        </div>
      </div>
    );
  }
}

