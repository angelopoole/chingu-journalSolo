import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';

const StyledMainContent = styled.main``;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
