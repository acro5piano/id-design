import React, { Component } from 'react';
import Header from 'components/Layouts/Header.jsx';
import Footer from 'components/Layouts/Footer.jsx';
import Top from 'components/Top.jsx';
import Works from 'components/Works.jsx';
import ShowWork from 'components/ShowWork.jsx';
import { HashRouter, Route } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    // 表示する閾値。適当に調整する。
    const screenOffset = window.innerHeight / 2

    const elements = document.getElementsByClassName('fadein')
    for (let element of elements) {
      window.addEventListener('scroll', () => {
        if (window.scrollY + screenOffset > element.offsetTop) {
          element.classList.add('active')
        }
      })
    }
  }

  render() {
    return (
      <HashRouter>
        <div id="app" className="App">
          <Header />
          <Route exact path="/" component={Top}/>
          <Route exact path="/works/" component={Works}/>
          <Route exact path="/works/:id/" component={ShowWork}/>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
