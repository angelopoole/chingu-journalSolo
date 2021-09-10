import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/use-auth';

import NotesForm from '../components/sections/NotesForm';
import NoteShowcase from '../components/sections/NoteShowcase';

import { Note } from '../interfaces/NoteTypes';
import EditNoteModal from '../components/sections/EditNoteModal';

// @desc this pace is protected, will only show notes if user is logged in.

const StyledContainer = styled.div`
  .login-message {
    display: block;
    padding: 50%;
    height: 100%;
    text-align: center;
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

  const handleEditNoteSubmit = useCallback(
    titleBody => {
      const handleEditNoteSubmitFn = async (titleBody: {
        title: string;
        body: string;
      }) => {
        if (!noteToEdit) {
          return;
        }

        const { _id, user } = noteToEdit;
        const updatedNote = { _id, user, ...titleBody };

        // ! userNotes being in the callback causes re-calls as long as editNoteModal is open
        // ! ommited from dep-array causes proper functionality
        const filteredNote = userNotes.filter(note => {
          if (note._id === updatedNote._id) {
            note.body = updatedNote.body;
            note.title = updatedNote.title;
          }
          return note;
        });

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
      };

      handleEditNoteSubmitFn(titleBody);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [auth.user?.token, noteToEdit]
  );

  if (!auth?.user) {
    return <Redirect to='/' />;
  }

  const fetchPosts = async (userToken: string) => {
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };
    const { data }: { data: [] } = await axios.get('/api/notes', config);
    return setUserNotes(data);
  };

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
    if (noteToEdit) {
      setNoteToEdit(undefined);
    }
  };

  const handleSetNoteToEdit = (selectedNote: Note) => {
    setNoteToEdit(selectedNote);
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
