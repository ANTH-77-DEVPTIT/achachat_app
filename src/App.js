import React, { Component } from 'react';
import Home from './pages/home/Home';
import TopBar from './topbar/TopBar'
class App extends Component {
  render() {
    return (
      <>
          <TopBar/>
          <Home/>
      </>
    );
  }
}

export default App;