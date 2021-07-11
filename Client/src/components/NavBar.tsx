import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../hooks/use-auth';

const StyledNavContainer = styled.div`
  width: 100%;
  background-color: purple;
`;

const StyledNavBar = styled.nav`
  display: flex;

  li {
    list-style: none;
    padding: 2rem;
    background-color: orange;
    cursor: pointer;
    :hover {
      background-color: red;
      transition: var(--transition);
      &:nth-child(2) {
        background-color: blue;
      }
    }
  }

  .login-logout-cluster {
    display: flex;

    justify-self: flex-end;
    margin-left: auto;
    justify-content: flex-end;
  }

  .interaction-buttons {
    display: flex;
    margin-right: auto;
  }
`;
const NavBar = ({ loggedIn }: { loggedIn: boolean }) => {
  const auth = useAuth();
  console.log(auth);
  return (
    <StyledNavContainer>
      <StyledNavBar>
        <div className='interaction-buttons'>
          <li>Journal</li>
          <li>Create a note</li>
        </div>
        <div className='login-logout-cluster'>
          <li>login</li>
          {loggedIn ? null : <li>'register'</li>}
          <li>{loggedIn ? 'logout' : 'signIn'}</li>
        </div>
      </StyledNavBar>
    </StyledNavContainer>
  );
};

export default NavBar;
