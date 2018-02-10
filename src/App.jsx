import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'
import Header from 'components/Layouts/Header.jsx';
import Footer from 'components/Layouts/Footer.jsx';
import Top from 'components/Top.jsx';
import Works from 'components/Works.jsx';
import ShowWork from 'components/ShowWork.jsx';
import Contact from 'components/Contact.jsx';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div id="app" className="App">
          <Header />
          <Route exact path="/" component={Top}/>
          <Route exact path="/works/" component={Works}/>
          <Route exact path="/works/:id/" component={ShowWork}/>
          <Route exact path="/contact" component={Contact}/>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
