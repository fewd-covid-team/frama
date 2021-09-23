import * as React from 'react';
import HeaderWrapper from './index.styles';

function Header(): JSX.Element {
  const content = (
    <header>
      <p> FEWD project </p>
    </header>
  );
  return <HeaderWrapper>{content}</HeaderWrapper>;
}

export default Header;
