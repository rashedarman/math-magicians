import React from 'react';

import './Header.module.scss';

class Header extends React.Component {
  render() {
    return (
      <header className="container">
        <nav>
          <h1>Math Magicians</h1>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/calculator">Calculator</a>
            </li>
            <li>
              <a href="/quote">Quote</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
