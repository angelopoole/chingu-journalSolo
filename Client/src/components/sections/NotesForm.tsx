import axios from 'axios';
import React, { ChangeEvent, FormEvent, useState } from 'react';

const NotesForm = () => {
  const [noteState, setNoteState] = useState({ title: '', body: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setNoteState({ ...noteState, [name]: value });
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const config = { headers: { 'Content-Type': 'application/json' } };
    axios.post('/api/notes', noteState, config);
  };

  return (
    <section>
      <form onSubmit={e => handleFormSubmit(e)}>
        <label htmlFor=''>
          title:
          <input name='title' type='text' onChange={e => handleChange(e)} />
        </label>
        <label htmlFor=''>
          body:
          <input type='text' name='body' onChange={e => handleChange(e)} />
        </label>
      </form>
    </section>
  );
};

export default NotesForm;
