import React, { Component } from 'react';

import { setFadeinTransition } from 'common'
import { works } from 'data'

export default class ShowWork extends Component {

  constructor() {
    super()
    this.state = {
      activeImage: null,
    }
  }

  componentWillMount() {
    setFadeinTransition()
  }

  get _work() {
    return works[this.props.match.params.id]
  }

  _onClickImage(index) {
    this.setState({ activeImage: index })
  }

  get _imageOverlay() {
    const image = this._work.images[this.state.activeImage]

    if (! image) {
      return
    }

    return (
      <div className="ShowWork-image-overlay">
        <img className="ShowWork-image-overlay-image" src={image.src} alt={image.alt} />
      </div>
    )
  }

  render() {
    return (
      <div className="Works">
        {this._imageOverlay}
        <div className="Works-section">
          <h2 className="Top-head">
            {this._work.description}
            {this._work.date}
          </h2>
        </div>
        <div className="Works-section">
          <div className="ShowWork-gallary">
            {this._work.images.map((image, index) =>
              <div className="fadein" key={index} onClick={() => this._onClickImage(index)}>
                <img className="ShowWork-gallary-image fadein" src={image.src} alt={image.alt} />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
