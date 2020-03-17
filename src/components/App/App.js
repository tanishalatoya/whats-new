import React, { Component } from 'react';
import NewsContainer from '../NewsContainer/NewsContainer';
import local from '../../data/local';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

  render () {
    return (
      <main className="app">
        <NewsContainer localNews={this.state.local}/>
      </main>
    );
  }
}

export default App;
