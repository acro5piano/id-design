import React, { Component } from 'react';

import { setFadeinTransition } from 'common'
import { top } from 'data'

export default class Top extends Component {

  componentDidMount() {
    setFadeinTransition()
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
                <source src={top.videos[0].src} />
              </video>
            </div>
          </div>
        </div>
        <div className="Top-section fadein">
          <h2 className="Top-head">
            Asana’s mission is to help humanity thrive by enabling all teams to work together effortlessly.
          </h2>
          <p className="Top-paragraph">
            Foster + Partners is a global studio for architecture, urbanism and design, all rooted in sustainability and founded by Norman Foster in 1967. Since then, he and the team around him have established an international practice with a worldwide reputation. With offices across the globe, we work as a single studio that is both ethnically and culturally diverse.
          </p>
        </div>
        <div className="Top-section fadein">
          <div className="Top-gallary">
            {top.images.map((image, index) =>
              <img className="Top-gallary-image" key={index} src={image.src} alt={image.alt} />
            )}
          </div>
        </div>
        <div className="Top-section">
          <a className="button-primary" href="/works">See All Works</a>
        </div>
        <div className="Top-section fadein">
          <div className="container Top-marin">
            <div className="six columns">
              <h2 className="Top-head Top-marin-head">
                Work shouldn’t be chaos
              </h2>
              <p className="Top-paragraph">
                Foster + Partners is a global studio for architecture, urbanism and design, all rooted in sustainability and founded by Norman Foster in 1967. Since then, he and the team around him have established an international practice with a worldwide reputation. With offices across the globe, we work as a single studio that is both ethnically and culturally diverse.
              </p>
            </div>
            <div className="six columns">
              <img className="fade u-full-width" src="/images/top-marin.jpg" alt="marin" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
