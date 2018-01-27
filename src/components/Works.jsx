import React, { Component } from 'react';
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
    setInterval(() => {
      this.setState({
        slickImage: this._nextImage
      })
    }, 5000)
  }

  get _nextImage() {
    if (this.state.slickImage.match('top-1')) return image2
    if (this.state.slickImage.match('top-2')) return image3
    if (this.state.slickImage.match('top-3')) return image1
  }

  render() {
    return (
      <div className="Top">
        Works
      </div>
    );
  }
}
