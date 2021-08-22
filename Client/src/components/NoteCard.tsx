import React from 'react';
import styled from 'styled-components';
import { Note } from '../interfaces/NoteTypes';

const StyledOuterCard = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin: 0.4rem;

  border: var(--dark-accent) solid;
  background-color: var(--light-shades);
  border-radius: 1rem;
`;

const StyledContent = styled.div`
  height: 80%;
  border-bottom: 3px var(--dark-accent) solid;
  .title {
    background-color: var(--light-accent);
    margin-top: 0;
    margin-bottom: 0.1rem;
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
    text-align: center;
  }

  p {
    height: 80%;
    margin: 0.3rem;
  }
`;

// TODO, fix how cards are created, instead go with a 4 area grid so that the outer card controlls the coloring on hover.

const StyledButtonContainer = styled.div`
  justify-self: flex-end;
  display: flex;
  justify-content: space-around;
  align-content: flex-end;
  height: 20%;

  button {
    all: unset;
    width: 100%;
    height: 100%;
    text-align: center;
    cursor: pointer;
  }
  button:nth-child(1) {
    margin-right: 0;
    border-right: 0.3rem var(--dark-accent) solid;
    border-bottom-left-radius: 0.8rem;
    background-color: var(--light-accent);
  }
  button:nth-child(2) {
    margin-left: 0;
    border-left: 0.3rem var(--dark-accent) solid;
    border-bottom-right-radius: 0.8rem;
    background-color: red;
  }

  button:hover {
    background-color: yellow;
  }
`;

const NoteCard = ({
  note,
  deleteNote,
  toggleEditModal,
  handleSetNoteToEdit,
}: {
  note: Note;
  deleteNote: (noteId: string) => void;
  toggleEditModal: () => void;
  handleSetNoteToEdit: (note: Note) => void;
}) => {
  const { _id, body, title } = note;

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
