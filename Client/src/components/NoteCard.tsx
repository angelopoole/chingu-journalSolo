import React from 'react';
import styled from 'styled-components';
import { Note } from '../interfaces/NoteTypes';

const StyledOuterCard = styled.div`
  display: flex;
  flex-flow: column;
  margin: 0.4rem;
  border: black solid;
  background-color: var(--light-shades);
  border-radius: 2rem;
`;

const StyledContent = styled.div`
  .title {
    background-color: #d9934e;
    margin-top: 0.1rem;
    border-top-left-radius: 2.3rem;
    border-top-right-radius: 2.3rem;
    text-align: center;
  }
`;

const StyledButtonContainer = styled.div`
  justify-self: flex-end;

  display: flex;
  justify-content: space-around;
  align-content: flex-end;
  /* align-self: flex-end; */
  button {
    all: unset;
    background-color: coral;
    padding: 0.3rem;
    min-width: 38.203px;
    text-align: center;
    border-radius: 2rem;
  }
`;

// todo edit on click -> modal for editing your note, send put request to server. user token and feild to edti with edit
// todo delete button on click => modal asking if you're sure that you want to delete this note, on confirmation send delete request with user headers and note id
const NoteCard = ({
  note,
  deleteNote,
}: {
  note: Note;
  deleteNote: (noteId: number) => void;
}) => {
  const { _id, body, title, user } = note;

  return (
    <StyledOuterCard>
      <StyledContent>
        <h3 className='title'>{title}</h3>
        <p className='body'>{body}</p>
      </StyledContent>
      <StyledButtonContainer className='button-container'>
        <button>edit</button>
        <button onClick={() => deleteNote(_id)}>delete</button>
      </StyledButtonContainer>
    </StyledOuterCard>
  );
};

export default NoteCard;
