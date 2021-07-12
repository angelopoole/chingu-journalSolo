import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../hooks/use-auth';

const StyledContainer = styled.div`
  min-height: 90vh;
  background-color: aliceblue;
  width: 100%;

  .login-message {
    text-align: center;
    margin: auto;
    padding: 20%;
    background-color: blanchedalmond;
    height: 100vh;
  }
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
  const auth = useAuth();

  console.log(auth?.user);

  return (
    <StyledContainer>
      {auth?.user ? (
        <div>here is the home page</div>
      ) : (
        <div className='login-message'> please login! </div>
      )}
    </StyledContainer>
  );
};

export default HomePage;
