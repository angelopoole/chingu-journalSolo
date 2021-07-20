import axios from 'axios';
import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { useAuth } from '../../hooks/use-auth';
import { Note } from '../../interfaces/NoteTypes';

import styled from 'styled-components';

const StyledSection = styled.section`
  /* min-width: 20vw; */
  /* min-height: 5rem; */
  padding: 1rem;
  background-color: #d94e4e;
  display: flex;
  justify-content: center;
  align-content: center;

  form {
    width: 45rem;
  }

  input,
  textarea {
    width: 100%;
  }
`;

const NotesForm = ({
  updateNotesArray,
}: {
  updateNotesArray: (Note: Note) => void;
}) => {
  const [noteState, setNoteState] = useState({ title: '', body: '' });
  const [error, setErrorState] = useState('');
  const auth = useAuth();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setNoteState({ ...noteState, [name]: value });
  };

  const handleFormSubmit = async (e: FormEvent) => {
    if (noteState.title.length > 15) {
      e.preventDefault();
      return setErrorState('Above character limit: 15');
    }
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${auth?.user?.token}`,
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post('/api/notes', noteState, config);
    // console.log(postedNote.data);
    updateNotesArray(data);
    setNoteState({ title: '', body: '' });
  };

  useEffect(() => {
    if (error) {
      alert(error);
      setErrorState('');
    }
  }, [error]);

  return (
    <StyledSection>
      <form onSubmit={e => handleFormSubmit(e)}>
        <label>
          title:
          <br />
          <input
            value={noteState.title}
            name='title'
            type='text'
            onChange={e => handleChange(e)}
            autoComplete='off'
          />
        </label>
        <br />
        <label>
          body:
          <br />
          <textarea
            value={noteState.body}
            name='body'
            onChange={e => handleChange(e)}
            className='form-body'
            autoComplete='off'
          />
        </label>
        <label>
          <input name='submit' type='submit' />
        </label>
      </form>
    </StyledSection>
  );
};

export default NotesForm;
