import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

  updateSearchInfo = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  searchArticles = (event) => {
    event.preventDefault();
    this.props.findArticles(this.state.search);
    this.clearInput();
  }

  clearInput = () => {
    this.setState({ search: '' })
  }

  render() {
    return (
      <form>
        <input
          name='search'
          type='text'
          placeholder='Search for news articles here.'
          value={this.state.search}
          onChange={this.updateSearchInfo}
        >
        </input>
        <button id='search-button' onClick={this.searchArticles}>Search Now</button>
      </form>
    )
  }
}

export default SearchForm;
