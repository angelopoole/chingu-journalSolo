import React from 'react';
import styled from 'styled-components';
import { Note } from '../interfaces/NoteTypes';

const StyledOuterCard = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin: 0.4rem;

  border: var(--dark-accent) inset;
  background-color: var(--light-shades);
  border-radius: 1.5rem;
`;

const StyledContent = styled.div`
  .title {
    background-color: var(--light-accent);
    margin-top: 0;
    border-top-left-radius: 3rem;
    border-top-right-radius: 3rem;
    text-align: center;
  }
`;

const StyledButtonContainer = styled.div`
  justify-self: flex-end;

  display: flex;
  justify-content: space-around;
  align-content: flex-end;
  /* bottom: 0; */
  margin-bottom: 4px;
  /* align-self: flex-end; */
  button {
    all: unset;
    background-color: var(--light-accent);
    padding: 0.3rem;
    min-width: 38.203px;
    text-align: center;
    border-radius: 2rem;
    bottom: 0;
  }
`;

// todo edit on click -> modal for editing your note, send put request to server. user token and feild to edti with edit
// todo delete button on click => modal asking if you're sure that you want to delete this note, on confirmation send delete request with user headers and note id
const NoteCard = ({
  note,
  deleteNote,
  toggleEditModal,
  handleSetNoteToEdit,
}: {
  note: Note;
  deleteNote: (noteId: number) => void;
  toggleEditModal: () => void;
  handleSetNoteToEdit: (note: Note) => void;
}) => {
  const { _id, body, title, user } = note;

  const handleModalAndSetEditNote = (note: Note) => {
    handleSetNoteToEdit(note);
    toggleEditModal();
  };

  return (
    <StyledOuterCard>
      <StyledContent>
        <h3 className='title'>{title}</h3>
        <p className='body'>{body}</p>
      </StyledContent>
      <StyledButtonContainer className='button-container'>
        <button onClick={() => handleModalAndSetEditNote(note)}>edit</button>
        <button onClick={() => deleteNote(_id)}>delete</button>
      </StyledButtonContainer>
    </StyledOuterCard>
  );
};

export default NoteCard;
