import React from "react";
import { FooterC } from './footer.styled';

const Footer = ({children}: {children: React.ReactNode}) => {
  return (
    <FooterC>
      {children}
    </FooterC>
  );
};

export default Footer;
