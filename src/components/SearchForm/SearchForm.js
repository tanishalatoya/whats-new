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

  render() {
    return (
      <form>
        <input
          name='search'
          type='text'
          placeholder='Search for news articles here.'
          value={this.state.name}
          onChange={this.updateSearchInfo}
        ></input>
        <button>Search Now</button>
      </form>
    )
  }
}

export default SearchForm;
