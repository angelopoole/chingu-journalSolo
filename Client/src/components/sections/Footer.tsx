import React from 'react';

import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: relative;
  padding: 10px 10px 0px 10px;
  bottom: 0;
  width: 100%;

  min-height: 3em;
  color: #fff;
  background-color: var(--dark-shades);
`;

const Footer = () => {
  return <StyledFooter>© 2021 Angelo Poole</StyledFooter>;
};

export default Footer;
