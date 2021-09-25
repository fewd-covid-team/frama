import * as React from 'react';
import FooterWrapper from './index.styles';

function FooterContent() {
  return (
    <div>
      <span> Done by Egor Osokin and Danil Usmanov</span>
    </div>
  );
}

function Footer() {
  return (
    <FooterWrapper>
      <FooterContent />
    </FooterWrapper>
  );
}

export default Footer;
