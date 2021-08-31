import axios from 'axios';
import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { useAuth } from '../../hooks/use-auth';
import { Note } from '../../interfaces/NoteTypes';

import styled from 'styled-components';

// !TODO make notes form reusable for modal.

const StyledSection = styled.section`
  border-top: var(--dark-accent) 3px solid;
  border-bottom: var(--dark-accent) 3px solid;
  padding: 1rem;
  background-color: var(--main-brand-color);

  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;

  form {
    width: 100%;
    max-width: 40rem;
  }

  #title {
    font-size: 1.3rem;
  }

  input,
  textarea {
    width: 100%;
    resize: none;
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

  // todo: create counter component that sits inside of input to the right to count how many characters are left over
  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { title, body } = noteState;

    if (title.length === 0 || body.length === 0) {
      return setErrorState('please fill out form');
    }

    if (title.length > 50 || body.length > 1000) {
      return setErrorState(
        `Above character limit title:(${title.length} / 15) body:(${body.length} / 260)  `
      );
    }

    const config = {
      headers: {
        Authorization: `Bearer ${auth.user?.token}`,
        'Content-Type': 'application/json',
      },
    };

    try {
      const { data } = await axios.post('/api/notes', noteState, config);
      updateNotesArray(data);
    } catch (error) {
      if (error instanceof Error) {
        console.error('SORRY ' + error.message);
        alert(error.message);
      }
    }

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
          <br />
          <input
            id='title'
            value={noteState.title}
            name='title'
            type='text'
            placeholder='Title'
            onChange={e => handleChange(e)}
            autoComplete='off'
          />
        </label>
        <br />
        <label>
          <br />
          <textarea
            value={noteState.body}
            name='body'
            onChange={e => handleChange(e)}
            placeholder='Body'
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
