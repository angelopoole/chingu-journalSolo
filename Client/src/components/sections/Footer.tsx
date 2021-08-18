import React from 'react';

import styled from 'styled-components';

const StyledFooter = styled.footer`
  /* background-image: radial-gradient(
      var(--light-accent) 0.8px,
      transparent 0.8px
    ),
    radial-gradient(var(--light-accent) 0.8px, var(--light-shades) 0.8px); */
  background-size: 32px 32px;
  background-position: 0 0, 16px 16px;
`;

const Footer = () => {
  return <StyledFooter>© 2021 Angelo poole</StyledFooter>;
};

export default Footer;
