import React, { Component } from 'react';

import { _componentDidMount } from 'common'

import image1 from 'assets/top-1.png';
import image2 from 'assets/top-2.png';
import image3 from 'assets/top-3.png';
import video from 'assets/sample.mp4';

import gallayImage0 from 'assets/top-gallary-0.jpg';
import gallayImage1 from 'assets/top-gallary-1.jpg';
import gallayImage2 from 'assets/top-gallary-2.jpg';
import gallayImage3 from 'assets/top-gallary-3.jpg';
import gallayImage4 from 'assets/top-gallary-4.jpg';
import gallayImage5 from 'assets/top-gallary-5.jpg';

import marinImage from 'assets/top-marin.jpg';

const gallaryImages = [
  gallayImage0,
  gallayImage1,
  gallayImage2,
  gallayImage3,
  gallayImage4,
  gallayImage5,
];

export default class Top extends Component {
  constructor () {
    super()
    this.state = {
      slickImage: image1
    }
  }

  componentDidMount() {
    _componentDidMount()
  }

  render() {
    return (
      <div className="Works">
        <div className="Works-section">
          <h2 className="Top-head">
            Works
          </h2>
        </div>
        <div className="Works-section">
          <div className="Works-gallary">
            {gallaryImages.map((image, index) =>
              <div
                className="Works-gallary-item fadein"
                key={index}>
                <div className="Works-gallary-hover-area">
                  <div className="Works-gallary-hover-date">
                    30 November, 2017
                  </div>
                  <div className="Works-gallary-hover-description">
                    Aedas projects recognised for design excellence at A&D Trophy Awards 2017
                  </div>
                </div>
                <img
                  className="Works-gallary-image"
                  src={image} alt={'gallayImage' + index} />
                <div className="Works-gallary-text">
                  <div className="Works-gallary-date">
                    30 November, 2017
                  </div>
                  <div className="Works-gallary-desctiption">
                    Aedas projects recognised for design excellence at A&D Trophy Awards 2017
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
