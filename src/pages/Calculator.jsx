import React from 'react';
import Calculator from '../components/Calculator';
import PageWrapper from '../components/layout/PageWrapper';

class CalculatorPage extends React.Component {
  render() {
    return (
      <PageWrapper>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <h1>Let&apos;s do some math!</h1>
          <Calculator />
        </div>
      </PageWrapper>
    );
  }
}

export default CalculatorPage;
