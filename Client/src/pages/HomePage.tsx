import React, { useEffect, useState, FormEvent } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';

import { useAuth } from '../hooks/use-auth';

import NotesForm from '../components/sections/NotesForm';
import NoteShowcase from '../components/sections/NoteShowcase';

import { Note } from '../interfaces/NoteTypes';
import EditNoteModal from '../components/sections/EditNoteModal';

// @desc this pace is protected, will only show notes if user is logged in.

const StyledContainer = styled.div`
  min-height: 90vh;
  min-width: 100%;

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

const HomePage = () => {
  const auth = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [userNotes, setUserNotes] = useState<Note[]>([]);
  const [noteToEdit, setNoteToEdit] = useState<Note | undefined>(undefined);

  useEffect(() => {
    if (auth.user) {
      fetchPosts(auth.user.token);
    } else {
      setUserNotes([]);
    }
  }, [auth.user]);

  const fetchPosts = async (userToken: string) => {
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };
    const { data }: { data: [] } = await axios.get('/api/notes', config);
    return setUserNotes(data);
  };

  if (!auth?.user) {
    return (
      <StyledContainer>
        <div className='login-message'> please login!</div>
      </StyledContainer>
    );
  }

  const deleteNote = async (noteId: string) => {
    const config = {
      headers: {
        Authorization: `Bearer ${auth.user?.token}`,
      },
    };
    await axios.delete(`/api/notes/${noteId}`, config);
    const filtered = userNotes.filter(note => note._id !== noteId);
    setUserNotes(filtered);
  };

  // creates a new note from note object.
  const updateNotesArray = (newNote: Note): void => {
    setUserNotes([...userNotes, newNote]);
  };

  const toggleEditModal = () => {
    setShowModal(!showModal);
  };

  const handleSetNoteToEdit = (selectedNote: Note) => {
    setNoteToEdit(selectedNote);
  };

  const handleEditNoteSubmit = async (
    titleBody: { title: string; body: string },
    e: FormEvent
  ) => {
    e.preventDefault();

    if (!noteToEdit) {
      return alert('Error! no note selected');
    }

    const { _id, user } = noteToEdit;
    const updatedNote = { _id, user, ...titleBody };

    const filteredNote = userNotes.filter(note => {
      if (note._id === updatedNote._id) {
        note.body = updatedNote.body;
        note.title = updatedNote.title;
      }
      return note;
    });

    toggleEditModal();

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${auth.user?.token}`,
        },
      };
      await axios.put(`/api/notes/${_id}`, titleBody, config);
    } catch (error) {
      console.error(error);
    }

    setUserNotes(filteredNote);
    setNoteToEdit(undefined);
  };

  return (
    <StyledContainer>
      <Helmet>
        <title>{auth.user.name}'s journal</title>
      </Helmet>
      <EditNoteModal
        showModal={showModal}
        noteToEdit={noteToEdit}
        toggleEditModal={toggleEditModal}
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
