import React, { Component } from 'react';
import './App.css';
import { Main } from './Component/Main';
import { Header } from './Component/Header';
class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Main></Main>
      </div>
    );
  }
}

export default App;
