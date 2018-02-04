import React, { Component } from 'react';

import { setFadeinTransition } from 'common'

import { works } from 'data'

export default class Top extends Component {

  componentDidMount() {
    setFadeinTransition()
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
            {works.map((work, index) =>
              <div className="Works-gallary-item fadein" key={index}>
                <div className="Works-gallary-hover-area">
                  <div className="Works-gallary-hover-date">
                    {work.date}
                  </div>
                  <div className="Works-gallary-hover-description">
                    {work.description}
                  </div>
                </div>
                <img className="Works-gallary-image" src={work.thumbnailSrc} alt={work.description} />
                <div className="Works-gallary-text">
                  <div className="Works-gallary-date">
                    {work.date}
                  </div>
                  <div className="Works-gallary-description">
                    {work.description}
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
