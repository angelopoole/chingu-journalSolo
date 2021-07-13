import axios from 'axios';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useAuth } from '../../hooks/use-auth';
import { Note } from '../../interfaces/NoteTypes';

import styled from 'styled-components';

const StyledSection = styled.section`
  min-width: 100vw;
  min-height: 5rem;
  padding: 1rem;
  background-color: #d94e4e;
  input {
    width: 12rem;

    .form-body {
      line-height: 3rem;
    }
  }
`;

const NotesForm = ({
  updateNotesArray,
}: {
  updateNotesArray: (Note: Note) => void;
}) => {
  const [noteState, setNoteState] = useState({ title: '', body: '' });
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
