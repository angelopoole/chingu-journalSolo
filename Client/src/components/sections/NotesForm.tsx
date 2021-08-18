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
  display: flex;
  justify-content: center;
  align-content: center;

  form {
    width: 45rem;
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

  const handleFormSubmit = async (e: FormEvent) => {
    if (noteState.title.length > 15 || noteState.body.length > 260) {
      e.preventDefault();
      return setErrorState(
        `Above character limit title:(${noteState.title.length} / 15) body:(${noteState.body.length} / 260)  `
      );
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
