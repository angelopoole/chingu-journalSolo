import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import Footer from './sections/Footer';

const StyledMainContent = styled.main`
  min-height: 100%;

  background-image: radial-gradient(
      var(--light-accent) 0.8px,
      transparent 0.8px
    ),
    radial-gradient(#f2f2f2 0.8px, #f2f2f2 0.8px);
  background-size: 32px 32px;
  background-position: 0 0, 16px 16px;
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
