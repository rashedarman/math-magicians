import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CalculatorPage from '../pages/Calculator';

it('Renders Calculator Page', () => {
  const result = render(
    <BrowserRouter>
      <CalculatorPage />
    </BrowserRouter>,
  );
  expect(result).toMatchSnapshot();
});
