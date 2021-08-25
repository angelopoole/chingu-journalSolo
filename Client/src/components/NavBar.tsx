import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';

const StyledNavBar = styled.nav`
  background-color: var(--main-brand-color);

  li {
    list-style: none;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const StyledUl = styled.ul`
  display: flex;
  padding: 0;
  /* min-width: 100%; */
  margin: 0px 0.5rem 0px 0.5rem;

  .nav-button {
    display: inline-block;
    vertical-align: middle;
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgb(0 0 0 / 0%);
    transition-duration: 0.3s;
    transition-property: transform;
    transform-origin: 0 100%;

    height: 100%;
    /* width: 100%; */

    cursor: pointer;
    padding: 1rem;
    :hover {
      background-color: var(--dark-accent);
      transition: var(--transition);
      transform: skew(-10deg);
    }
  }

  li.align-left {
    margin-left: auto;
    margin-right: 0.5rem;
  }
  .sign-out {
    font-family: inherit;
  }
`;
const NavBar = () => {
  const auth = useAuth();

  return (
    <>
      <StyledNavBar>
        <StyledUl>
          <li>
            <StyledLink className='nav-button' to='/'>
              Chingu-Journal
            </StyledLink>
          </li>
          <li className='nav-button'>Create a note</li>
          {auth.user ? (
            <li className='align-left'>
              <button
                className='nav-button sign-out'
                onClick={() => auth.signout()}
              >
                sign out
              </button>
            </li>
          ) : (
            <>
              <li className='align-left'>
                <StyledLink className='nav-button' to='/auth/login'>
                  login
                </StyledLink>
              </li>
              <li>
                <StyledLink className='nav-button' to='/auth/signup'>
                  signup
                </StyledLink>
              </li>
            </>
          )}
        </StyledUl>
      </StyledNavBar>
    </>
  );
};

export default NavBar;
