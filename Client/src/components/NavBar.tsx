import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';

const StyledNavContainer = styled.div`
  width: 100%;
  background-color: purple;
`;

const sharedStyles = css`
  list-style: none;
  padding: 1.9rem;
  background-color: orange;
  cursor: pointer;
  :hover {
    background-color: red;
    transition: var(--transition);
    &:nth-child(2) {
      background-color: blue;
    }
  }
`;
const StyledLink = styled(Link)`
  ${sharedStyles}

  text-decoration: none;
  color: inherit;
`;

const StyledNavBar = styled.nav`
  display: flex;

  li {
    list-style: none;
    padding: 1.9rem;
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
  }

  .interaction-buttons {
    display: flex;
  }
`;

const StyledUl = styled.ul`
  padding: 0;
  display: flex;
  margin: 0px 0.5rem 0px 0.5rem;
`;
const NavBar = () => {
  return (
    <StyledNavContainer>
      <StyledNavBar>
        <div className='interaction-buttons'>
          <StyledUl>
            <StyledLink to='/'>Journal</StyledLink>
            <li>Create a note</li>
          </StyledUl>
        </div>
        <div className='login-logout-cluster'>
          <StyledUl>
            <StyledLink to='/auth/:login'>login</StyledLink>
            <StyledLink to='/auth/:register'>regsiter</StyledLink>
          </StyledUl>
        </div>
      </StyledNavBar>
    </StyledNavContainer>
  );
};

export default NavBar;
