import React from 'react';
import styled from 'styled-components';

import SubtlePrism from '../images/SubtlePrism.svg';

const TopOfHomeLandingPage = styled.div`
  display: flex;
  flex-flow: column;
  text-align: center;
  position: relative;
  width: 100%;
  justify-content: center;
  padding-bottom: 40em;
  background-image: url(${SubtlePrism});
  /* background by SVGBackgrounds.com */
`;

const StyledContainer = styled.div`
  padding: 10em 5em;
  background-color: var(--light-accent);
  max-width: 1270px;
  align-self: center;

  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
`;

const LandingPage = () => {
  return (
    <TopOfHomeLandingPage id='terr'>
      <StyledContainer>
        <h1>
          Hello! welcome to chingu journal! <br /> please login!
        </h1>
      </StyledContainer>
    </TopOfHomeLandingPage>
  );
};

export default LandingPage;
