import React from 'react';
import NewsArticle from './NewsArticle';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('NewsArticle', () => {
  it('should display a headline, a description, and an image', () => {

    const { getByText, getByAltText } = render(<NewsArticle
      id={5}
      image={'http://image1.jpg'}
      alt={'image description'} //But this isn't a prop...
      headline={'Some News'}
      description={'Story goes here.'}
      url={'http://link'}
      />)

    const headlineEl = getByText('Some News');
    const descriptionEl = getByText('Story goes here.');

    //Image does not DISPLAY text, figure out how to get the source or the alt text...
    // const imageEl = getByAltText('image description');

    //does this mean that we cannot test for urls either???
    // const urlEl = getByText()
    expect(headlineEl ).toBeInTheDocument();
    expect(descriptionEl ).toBeInTheDocument();
  });
});
