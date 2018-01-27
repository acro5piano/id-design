import React, { Component } from 'react';
import Header from 'components/Layouts/Header.jsx';
import Footer from 'components/Layouts/Footer.jsx';
import Top from 'components/Top.jsx';

class App extends Component {
  componentDidMount() {
    // 表示する閾値。適当に調整する。
    const screenOffset = window.innerHeight / 2

    const elements = document.getElementsByClassName('fadein')
    for (let element of elements) {
      window.addEventListener('scroll', () => {
        if (window.scrollY + screenOffset > element.offsetTop) {
          element.classList.add('is-active')
        }
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Top />
        <Footer />
      </div>
    );
  }
}

export default App;
