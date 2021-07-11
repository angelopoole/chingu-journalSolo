import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  min-height: 80vh;
  background-color: aliceblue;
`;

/*
homepage will display all journals + give you the ablity to post a journal 
this will require a form and a state to hold form. aswell as the mapping of journalEntries to an array of components eg: <JournalEntrieList>
*/

/* 
  !this page is going to be protected
  should show signin / login page in case they arent signed in. this will be done with token auth
*/

const HomePage = () => {
  return (
    <StyledContainer>
      <div>here is the home page</div>
    </StyledContainer>
  );
};

export default HomePage;
