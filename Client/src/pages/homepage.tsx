import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { useAuth } from '../hooks/use-auth';

import NotesForm from '../components/sections/NotesForm';
import NoteShowcase from '../components/sections/NoteShowcase';

import { Note } from '../interfaces/NoteTypes';
import EditNoteModal from '../components/sections/EditNoteModal';

// @desc this pace is protected, will only show notes if user is logged in.

const StyledContainer = styled.div`
  min-height: 90vh;
  width: 100%;

  background-image: radial-gradient(
      var(--light-accent) 0.8px,
      transparent 0.8px
    ),
    radial-gradient(#f2f2f2 0.8px, #f2f2f2 0.8px);
  background-size: 32px 32px;
  background-position: 0 0, 16px 16px;

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
  const [showModal, setShowModal] = useState(false);
  const [userNotes, setUserNotes] = useState<Note[]>([]);
  const [noteToEdit, setNoteToEdit] = useState<Note | undefined>();

  console.log('userNotes -> ', userNotes);
  // console.log('note to edit -> ', noteToEdit);
  // console.log('auth -> ', auth?.user);

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
    return (
      <StyledContainer>
        <div className='login-message'> please login!</div>
      </StyledContainer>
    );
  }

  const deleteNote = async (noteId: number) => {
    const config = {
      headers: {
        Authorization: `Bearer ${auth.user?.token}`,
      },
    };
    const deleteNote = await axios.delete(`/api/notes/${noteId}`, config);
    console.log(deleteNote.data);
    const filtered = userNotes.filter(note => note._id !== noteId);
    setUserNotes(filtered);
  };

  const updateNotesArray = (newNote: Note) => {
    setUserNotes([...userNotes, newNote]);
  };

  const toggleEditModal = () => {
    setShowModal(!showModal);
  };

  const handleSetNoteToEdit = (selectedNote: Note) => {
    setNoteToEdit(selectedNote);
  };

  const handleEditNoteSubmit = (editedNote: Note) => {
    // takes in a note, finds same note in notes array, removes that note and replaces it with this note,

    setNoteToEdit(undefined);
  };

  // const editNote = () => {};

  return (
    <StyledContainer>
      <EditNoteModal
        showModal={showModal}
        toggleEditModal={toggleEditModal}
        noteToEdit={noteToEdit}
        handleEditNoteSubmit={handleEditNoteSubmit}
      />
      <NotesForm updateNotesArray={updateNotesArray} />
      <NoteShowcase
        deleteNote={deleteNote}
        notes={userNotes}
        toggleEditModal={toggleEditModal}
        handleSetNoteToEdit={handleSetNoteToEdit}
      />
    </StyledContainer>
  );
};

export default HomePage;
