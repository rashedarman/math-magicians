import React from 'react';
import { Link } from 'react-router-dom';

import './Header.module.scss';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="container">
          <nav>
            <h1>Math Magicians</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/calculator">Calculator</Link>
              </li>
              <li>
                <Link to="/quote">Quote</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
