import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import Footer from './sections/Footer';

const StyledMainContent = styled.main`
  display: flex;
  min-width: 100%;
  flex-flow: column;
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <StyledMainContent>{children}</StyledMainContent>
      <Footer />
    </>
  );
};

export default Layout;
