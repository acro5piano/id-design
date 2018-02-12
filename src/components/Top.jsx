import React, { Component } from 'react';

import { setFadeinTransition } from 'common'
import { top } from 'data'
import { Link } from 'react-router-dom'

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
              家とは、<br />
              住んでみて、ようやくその良さがわかるもの。<br />
              家族が集う、かけがえのない存在になるもの。
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
            住めば住むほど、ますます好きになる。
          </h2>
          <p className="Top-paragraph">
            10年後も20年後も、<br />
            住んでいて気持ちが良く、家族がまたそこに戻りたいと思える空間にしたい。<br />
            お客様に真剣に向き合い、いただいたご希望をできるだけ叶えたい。
            <br /><br />
            コンクリートの冷たい感覚。<br />
            素材感が伝わる温かみのある感覚。<br />
            言葉ではうまく表現しきれない微細な色や質感のお好みも
            お客様から感じ取ります。
            <br /><br />
            私たちが目指しているのは、【我が家をリゾート】にすることです。
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
          <Link to="/works" className="button-primary">施工例を見る</Link>
        </div>
        <div className="Top-section fadein">
          <div className="container Top-marin">
            <div className="six columns">
              <h2 className="Top-head Top-marin-head">
                素材選びから、真剣にこだわっています。
              </h2>
              <p className="Top-paragraph">
                私たちは、【我が家をリゾート】を目指し、実際に使われるお家の素材選びから、真剣にこだわっています。<br />
                使う石材や木材は慎重に選択し、選びぬいた素材のみを使ってお家を作ります。
                <br /><br />
                産地が違えば、その表情も変わってくる。<br />
                材料の主張を活かした空間を作る。
                <br /><br />
                お客様が実際に住まう光景を想像し、実現していきます。
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
