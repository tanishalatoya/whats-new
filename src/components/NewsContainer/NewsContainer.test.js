import React from 'react';
import NewsContainer from './NewsContainer';
import { render } from '@testing-library/react';

describe('NewsContainer', () => {
  it('should display a news article', () => {
    const { getByText } = render(<NewsContainer
      

      />)

  });
})
