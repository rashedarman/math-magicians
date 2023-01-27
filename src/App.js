import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CalculatorPage from './pages/Calculator';
import HomePage from './pages/Home';
import QuotePage from './pages/Quote';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/quote" element={<QuotePage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
