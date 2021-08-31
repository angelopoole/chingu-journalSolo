import React from 'react';

import styled from 'styled-components';

const StyledFooter = styled.footer`
  min-height: 3em;
  color: #fff;
  background-color: var(--dark-shades);
`;

const Footer = () => {
  return <StyledFooter>© 2021 Angelo Poole</StyledFooter>;
};

export default Footer;
