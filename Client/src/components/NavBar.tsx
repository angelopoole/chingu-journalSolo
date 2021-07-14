import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';
import AuthPage from '../pages/AuthPage';

const StyledNavContainer = styled.div`
  width: 100%;
  background-color: var(--main-brand-color);
  border: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const StyledNavBar = styled.nav`
  display: flex;

  .sign-out {
    all: unset;
  }

  .nav-button {
    display: inline-block;
    vertical-align: middle;
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgb(0 0 0 / 0%);
    transition-duration: 0.3s;
    transition-property: transform;
    transform-origin: 0 100%;

    cursor: pointer;
    padding: 1.2rem;
    :hover {
      background-color: var(--dark-accent);
      transition: var(--transition);
      transform: skew(-10deg);
    }
  }

  li {
    list-style: none;
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
  const auth = useAuth();

  return (
    <StyledNavContainer>
      <StyledNavBar>
        <div className='interaction-buttons'>
          <StyledUl>
            <StyledLink className='nav-button' to='/'>
              Journal
            </StyledLink>
            <li className='nav-button'>Create a note</li>
          </StyledUl>
        </div>
        <div className='login-logout-cluster'>
          <StyledUl>
            {auth?.user ? (
              <button
                className='nav-button sign-out'
                onClick={() => auth.signout()}
              >
                sign out
              </button>
            ) : (
              <>
                <StyledLink className='nav-button' to='/auth/login'>
                  login
                </StyledLink>
                <StyledLink className='nav-button' to='/auth/signup'>
                  signup
                </StyledLink>
              </>
            )}
          </StyledUl>
        </div>
      </StyledNavBar>
    </StyledNavContainer>
  );
};

export default NavBar;
