import React, { useEffect, useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

function Calculator() {
  const [calcData, setCalcData] = useState({
    total: 0,
    operation: null,
    next: null,
  });
  const { total, next, operation } = calcData;

  const calcEvent = (e) => {
    setCalcData((state) => calculate(state, e.textContent));
  };

  useEffect(() => {
    document.querySelectorAll('button[type="button"]').forEach((button) => {
      button.addEventListener('click', () => calcEvent(button));
    });
  }, []);

  return (
    <div id="calculator">
      <p className="output">
        {total}
        {operation}
        {next}
      </p>
      <button type="button">AC</button>
      <button type="button">+/-</button>
      <button type="button">%</button>
      <button type="button" className="secondary">
        ÷
      </button>
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button type="button" className="secondary">
        x
      </button>
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button type="button" className="secondary">
        -
      </button>
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button" className="secondary">
        +
      </button>
      <button type="button" id="zero-btn">
        0
      </button>
      <button type="button">.</button>
      <button type="button" className="secondary">
        =
      </button>
    </div>
  );
}

export default Calculator;
