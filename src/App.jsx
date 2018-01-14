import React, { Component } from 'react';
import Header from 'components/Layouts/Header.jsx';
import Footer from 'components/Layouts/Footer.jsx';
import Top from 'components/Top.jsx';

class App extends Component {
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
