import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import UserPics from './components/body/userPics'

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <UserPics />
      </div>
    );
  }
}

export default App;
