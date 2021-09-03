import React from 'react';
import styled from 'styled-components';

import Background from '../images/HomepageBackground.svg';

const TopOfHomeLandingPage = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  justify-content: center;
  padding: 125%;
  background-color: teal;
`;

const StyledContainer = styled.div`
  .login-message {
    display: block;

    height: 100%;
    text-align: center;
  }

  .bg-svg {
    position: absolute;
    top: 0;
    bottom: 0;
    background: url(${Background}) no-repeat;
  }
`;

const LandingPage = () => {
  return <TopOfHomeLandingPage id='terr'></TopOfHomeLandingPage>;
};

export default LandingPage;
