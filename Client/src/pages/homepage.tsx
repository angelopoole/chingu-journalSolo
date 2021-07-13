import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAuth } from '../hooks/use-auth';
import NotesForm from '../components/sections/NotesForm';
import axios from 'axios';

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

const fetchPosts = async () => {
  // await axios.get()
};

const HomePage = () => {
  const auth = useAuth();

  useEffect(() => {
    if (auth?.user) {
      fetchPosts();
    }
  }, [auth?.user]);

  if (!auth?.user) {
    return <div className='login-message'> please login! </div>;
  }

  return (
    <StyledContainer>
      <NotesForm />
    </StyledContainer>
  );
};

export default HomePage;
