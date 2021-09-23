import * as React from 'react';
import { Link } from 'react-router-dom';
import HeaderWrapper from './index.styles';

function Header(): JSX.Element {
  const content = (
    <header>
      <h3> Frama project </h3>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/traitors">Traitors</Link>
          </li>
          <li>
            <Link to="/stat">Statistics</Link>
          </li>
          <li>
            <Link to="/tips">tips</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
  return <HeaderWrapper>{content}</HeaderWrapper>;
}

export default Header;
