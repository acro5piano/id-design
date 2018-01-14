import React, { Component } from 'react';
import image1 from 'assets/top-1.png';
import image2 from 'assets/top-2.png';
import image3 from 'assets/top-3.png';
import video from 'assets/sample.mp4';

// const images = [image1, image2]

export default class Top extends Component {
  constructor () {
    super()
    this.state = {
      slickImage: image1
    }
  }

  get nextImage() {
    if (this.state.slickImage.match('top-1')) return image2
    if (this.state.slickImage.match('top-2')) return image3
    if (this.state.slickImage.match('top-3')) return image1
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        slickImage: this.nextImage
      })
    }, 5000)
  }

  get activeSlideIndex () {
    if (this.state.slickImage.match('top-1')) return 1
    if (this.state.slickImage.match('top-2')) return 2
    if (this.state.slickImage.match('top-3')) return 3
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
          <p className="Top-paragraph">
            Foster + Partners is a global studio for architecture, urbanism and design, all rooted in sustainability and founded by Norman Foster in 1967. Since then, he and the team around him have established an international practice with a worldwide reputation. With offices across the globe, we work as a single studio that is both ethnically and culturally diverse.
          </p>
        </div>
      </div>
    );
  }
}
