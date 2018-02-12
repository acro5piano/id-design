import React, { Component } from 'react';

import {
  setFadeinTransition,
  setKeyboardShortcut,
  addClassToBody,
  removeClassFromBody,
} from 'common'
import { works } from 'data'

export default class ShowWork extends Component {
  constructor() {
    super()
    this.state = {
      activeImageIndex: 0,
      modalVisible: false,
    }
  }

  componentDidMount() {
    setFadeinTransition()
    setKeyboardShortcut('Escape', () => this._closeModal())
    setKeyboardShortcut('ArrowLeft', () => this._prevImage())
    setKeyboardShortcut('ArrowRight', () => this._nextImage())
  }

  get _work() {
    return works[this.props.match.params.id]
  }

  _onClickImage(index) {
    addClassToBody('body-lock-scroll')
    this.setState({
      activeImageIndex: index,
      modalVisible: true,
    })
  }

  _closeModal() {
    this.setState({ modalVisible: false })
    removeClassFromBody('body-lock-scroll')
  }

  _onClickModal(e) {
    // We check the event is triggered exactly by the modal overlay behind the image.
    // This is because the 'click' event can be fired by child components.
    if (e.target === e.currentTarget) {
      this._closeModal()
    }
  }

  get _canNavigateNextImage() {
    return this.state.activeImageIndex < this._work.images.length - 1
  }

  _nextImage() {
    if (! this._canNavigateNextImage) {
      return
    }
    this.setState({
      activeImageIndex: this.state.activeImageIndex + 1,
    })
  }

  get _canNavigatePrevImage() {
    return this.state.activeImageIndex > 0
  }

  _prevImage() {
    if (! this._canNavigatePrevImage) {
      return
    }
    this.setState({
      activeImageIndex: this.state.activeImageIndex - 1,
    })
  }

  render() {
    const image = this._work.images[this.state.activeImageIndex]

    let modalClassName = 'ShowWork-image-overlay'
    if (this.state.modalVisible === false) {
      modalClassName += ' ShowWork-modal-hidden'
    }

    // We always render Modal.
    // This is because css transition requires constant element existance.
    return (
      <div className="u-page-title">
        <div className={modalClassName} onClick={e => this._onClickModal(e)}>
          <div className="ShowWork-image-overlay-close" onClick={() => this._closeModal()}>
            <i className="material-icons md-light">close</i>
          </div>
          <div className="ShowWork-image-overlay-main">
            <span className="ShowWork-image-navigation" onClick={() => this._prevImage()}>
              {this._canNavigatePrevImage && <i className="material-icons md-48 md-light">navigate_before</i> }
            </span>
            {image && <img className="ShowWork-image-overlay-image" src={image.src} alt={image.alt} />}
            <span className="ShowWork-image-navigation" onClick={() => this._nextImage()}>
              {this._canNavigateNextImage && <i className="material-icons md-48 md-light">navigate_next</i> }
            </span>
          </div>
        </div>
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
