import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import Body from './components/body/post'

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
