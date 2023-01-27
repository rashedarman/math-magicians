import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../pages/Home';

it('Renders home page', () => {
  const result = render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>,
  );
  expect(result).toMatchSnapshot();
});

// import renderer from 'react-test-renderer';
