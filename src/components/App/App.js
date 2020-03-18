import React, { Component } from 'react';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu'
import HeaderTitle from '../HeaderTitle/HeaderTitle'
import SearchForm from '../SearchForm/SearchForm'
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

  findArticles = (query) => {
    const stateKeys = Object.keys(this.state)
    const allNewsArticles = stateKeys.reduce((combinedTopics, topic) => {
      if (topic !== 'currentNewsTopic') {
        combinedTopics = combinedTopics.concat(this.state[topic])
      }
      return combinedTopics;
    }, [])
    const queriedArticles = allNewsArticles.filter(article => {
      return article.headline.includes(query) || article.description.includes(query)
    })

    if (queriedArticles.length === 0) {
      this.setState({ currentNewsTopic: local })
    } else {
      let id = 0
      queriedArticles.forEach(article => {
      article.id = (id += 1)
      })
      this.setState({ currentNewsTopic: queriedArticles })
    }
  }

  render () {
    return (
      <main className='app'>
        <HeaderTitle />
        <SearchForm findArticles={this.findArticles} />
        <Menu updateCurrentNewsTopic={this.updateCurrentNewsTopic} />
        <NewsContainer
          currentNewsTopic={this.state.currentNewsTopic}
          />
      </main>
    );
  }
}

export default App;
