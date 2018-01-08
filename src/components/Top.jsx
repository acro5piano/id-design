import React, { Component } from 'react';
import image1 from '../assets/top-1.png';
import image2 from '../assets/top-2.png';

export default class Top extends Component {
  render() {
    return (
      <div className="Top">
        <div className="Top-slide" style={{backgroundImage: `url(${image1})`}}>
          <div className="Top-slide-cover">
            <div className="Top-slide-text">
              WE PLAN AND DESIGN
              THE COMMUNITIES AND CITIES
              OF THE FUTURE.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
