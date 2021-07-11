import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';

const Layout = ({
  children,
  loggedIn,
}: {
  children: React.ReactNode;
  loggedIn: boolean;
}) => {
  return (
    <div>
      <NavBar loggedIn={loggedIn} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
