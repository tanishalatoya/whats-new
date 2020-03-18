import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = '';
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Search for news articles here.'
          value={this.state}
        ></input>
        <button type='search'>Search Now</button>
      </form>
    )
  }
}

export default SearchForm;
