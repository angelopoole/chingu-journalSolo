import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';

const StyledMainContent = styled.main``;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <footer>this be a footer</footer>
    </>
  );
};

export default Layout;
