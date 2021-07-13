import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { useAuth } from '../hooks/use-auth';

import NotesForm from '../components/sections/NotesForm';
import NoteShowcase from '../components/sections/NoteShowcase';

import { Note } from '../interfaces/NoteTypes';

const StyledContainer = styled.div`
  min-height: 90vh;
  background-color: #4d94db;
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

  const [userNotes, setUserNotes] = useState<Note[]>([]);
  console.log(userNotes);

  const fetchPosts = async (userToken: string) => {
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };
    const { data }: { data: [] } = await axios.get('/api/notes', config);
    return setUserNotes(data);
  };
  useEffect(() => {
    if (localStorage.token) {
      console.log('token found');
    }
    if (auth?.user) {
      fetchPosts(auth.user.token);
    }
    if (!auth?.user) {
      setUserNotes([]);
    }
  }, [auth?.user]);

  if (!auth?.user) {
    return <div className='login-message'> please login! </div>;
  }

  const updateNotesArray = (newNote: Note) => {
    setUserNotes([...userNotes, newNote]);
  };

  return (
    <StyledContainer>
      <NotesForm updateNotesArray={updateNotesArray} />
      <NoteShowcase notes={userNotes} />
    </StyledContainer>
  );
};

export default HomePage;
