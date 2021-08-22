import React, { ChangeEvent, useState, useEffect, FormEvent } from 'react';
import styled from 'styled-components';
import { Note } from '../../interfaces/NoteTypes';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background: rgba(0, 0, 0, 0.5);
  z-index: 3;
  /* z-index: 999; */
`;

const StyledModalBackground = styled.div`
  height: 50%; /* Set your own height: percents, ems, whatever! */
  width: 50%; /* Set your own width: percents, ems, whatever! */
  overflow: auto; /* Recommended in case content is larger than the container */
  margin: auto; /* Center the item vertically & horizontally */
  position: absolute; /* Break it out of the regular flow */
  top: 0;
  left: 0;
  bottom: 0;
  right: 0; /* Set the bounds in which to center it, relative to its parent/container */
  background-color: var(--main-brand-color);

  /* .Absolute-Center.is-Fixed { */
  position: fixed;
  z-index: 999;
  /* } */

  .Absolute-Center.is-Variable {
    display: table;
    height: auto; /* Only necessary because height was already declared */
  }
`;

const StyledFormContainer = styled.form`
  z-index: 1000;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 3rem);

  .label {
    text-align: center;
    height: 50%;
  }
  .title {
    /* take up 4 area */
    grid-area: 1 / 2 / span 1 / span 3;
  }
  .body {
    grid-area: 2 / 2 / span 4 / span 3;
    /* take up 6l 4 h starting from row 2 */
  }
  .submit {
    grid-area: -1, -1;
  }
`;

type EditNoteModalProps = {
  showModal: boolean;
  toggleEditModal: () => void;
  noteToEdit: Note | undefined;
  handleEditNoteSubmit: (
    titlebody: { title: string; body: string },
    e: FormEvent
  ) => void;
};

const EditNoteModal = ({
  showModal,
  toggleEditModal,
  noteToEdit,
  handleEditNoteSubmit,
}: EditNoteModalProps) => {
  const [noteState, setNoteState] = useState({
    title: '',
    body: '',
  });

  // take in note title and body, prepopulate textarea and title with info.
  // take note object & populate edit areas with note information

  // will handle note update submit.

  //! check noteToEdit -> for string | undefined and remove the undefined bit from it. noteToEdit.title should not be undefined, should be empty.

  useEffect(() => {
    if (noteToEdit === undefined) {
      return;
    } else {
      setNoteState({ title: noteToEdit?.title, body: noteToEdit?.body });
    }
  }, [noteToEdit]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setNoteState({ ...noteState, [name]: value });
  };

  // if (!showModal) {
  // return <></>;
  // }

  // TODO turn this into a 6 line gridbox item

  return (
    <>
      {showModal && (
        <>
          <ModalBackground onClick={() => toggleEditModal()} />
          <StyledModalBackground>
            <StyledFormContainer
              onSubmit={e => handleEditNoteSubmit(noteState, e)}
            >
              <label className='label'>
                title:
                <br />
              </label>
              <input
                className='title'
                value={noteState.title}
                name='title'
                type='text'
                onChange={e => handleChange(e)}
                autoComplete='off'
              />
              <br />
              <label className='label'>
                body:
                <br />
              </label>
              <br />
              <textarea
                value={noteState.body}
                name='body'
                onChange={e => handleChange(e)}
                className='body'
                autoComplete='off'
              />

              <input
                className='submit'
                name='submit'
                type='submit'
                // onSubmit={noteState => handleEditNoteSubmit(noteState)}
              />
            </StyledFormContainer>
          </StyledModalBackground>
        </>
      )}
    </>
  );
};

export default EditNoteModal;
