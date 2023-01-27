import React from 'react';
import PageWrapper from '../components/PageWrapper';

class QuotePage extends React.Component {
  render() {
    return (
      <PageWrapper>
        <p
          style={{
            fontSize: '2rem',
            fontWeight: '500',
            textAlign: 'center',
          }}
        >
          Mathematics is not about numbers, equations, computations, or
          alogrithms; it is about understanding. -William Paul Thuston
        </p>
      </PageWrapper>
    );
  }
}

export default QuotePage;
