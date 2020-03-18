import React, { Component } from 'react';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu'
import HeaderTitle from '../HeaderTitle/HeaderTitle'
import local from '../../data/local';
import technology from '../../data/technology';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local,
      technology,
      entertainment,
      health,
      science,
      currentNewsTopic: local
    }
  }

  updateCurrentNewsTopic = (topic) => {
    const stateKeys = Object.keys(this.state)
    const currentKey = stateKeys.find(key => key === topic)
    this.setState({ currentNewsTopic: this.state[currentKey] })
  }

  render () {
    return (
      <main className="app">
        <HeaderTitle />
        <Menu updateCurrentNewsTopic={this.updateCurrentNewsTopic} />
        <NewsContainer
          currentNewsTopic={this.state.currentNewsTopic}
          />
      </main>
    );
  }
}

export default App;
