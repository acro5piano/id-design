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
        <div className="Top-movie">
          <div className="Top-movie-cover">
            <div className="Top-movie-text">
              WE PLAN AND DESIGN
              THE COMMUNITIES AND CITIES
              OF THE FUTURE.
            </div>
            <div className="Top-movie-video-area">
              <video loop muted autoPlay className="Top-movie-video">
                <source src={video} />
              </video>
            </div>
          </div>
        </div>
        <div className="Top-section">
          <h2 className="Top-head">
            Asana’s mission is to help humanity thrive by enabling all teams to work together effortlessly.
          </h2>
          <p className="Top-paragraph fadein">
            Foster + Partners is a global studio for architecture, urbanism and design, all rooted in sustainability and founded by Norman Foster in 1967. Since then, he and the team around him have established an international practice with a worldwide reputation. With offices across the globe, we work as a single studio that is both ethnically and culturally diverse.
          </p>
        </div>
        <div className="Top-section">
          <div className="Top-gallary">
            {gallaryImages.map((image, index) =>
              <img className="Top-gallary-image fadein" key={index} src={image} alt={'gallayImage' + index} />
            )}
          </div>
        </div>
        <div className="Top-section">
          <div className="container Top-marin">
            <div className="six columns">
              <h2 className="Top-head Top-marin-head">
                Work shouldn’t be chaos
              </h2>
              <p className="Top-paragraph fadein">
                Foster + Partners is a global studio for architecture, urbanism and design, all rooted in sustainability and founded by Norman Foster in 1967. Since then, he and the team around him have established an international practice with a worldwide reputation. With offices across the globe, we work as a single studio that is both ethnically and culturally diverse.
              </p>
            </div>
            <div className="six columns">
              <img src={marinImage} />
            </div>
          </div>
        </div>
        <div className="Top-section">
          <a className="button-primary" href="/works">See All Works</a>
        </div>
      </div>
    );
  }
}
