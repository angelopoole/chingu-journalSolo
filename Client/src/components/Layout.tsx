import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';

const StyledMainContent = styled.main`
  background-color: var(--dark-shades);
  display: flex;
  flex-flow: column;
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <StyledMainContent>{children}</StyledMainContent>
      <footer>this be a footer</footer>
    </>
  );
};

export default Layout;
