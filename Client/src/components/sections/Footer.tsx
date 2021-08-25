import React from 'react';

import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-size: 32px 32px;
  background-position: 0 0, 16px 16px;
`;

const Footer = () => {
  return <StyledFooter>© 2021 Angelo Poole</StyledFooter>;
};

export default Footer;
