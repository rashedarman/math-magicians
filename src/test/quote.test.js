import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import QuotePage from '../pages/Quote';

it('Renders quote page', () => {
  const result = render(
    <BrowserRouter>
      <QuotePage />
    </BrowserRouter>,
  );
  expect(result).toMatchSnapshot();
});
