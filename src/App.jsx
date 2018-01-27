import React, { Component } from 'react';
import Header from 'components/Layouts/Header.jsx';
import Footer from 'components/Layouts/Footer.jsx';
import Top from 'components/Top.jsx';
import Works from 'components/Works.jsx';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { withRouter } from 'react-router-dom';

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
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Top}/>
          <Route exact path="/works" component={Works}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
