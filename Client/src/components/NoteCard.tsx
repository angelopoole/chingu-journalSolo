import React from 'react';
import styled from 'styled-components';
import { Note } from '../interfaces/NoteTypes';

const NoteCard = ({ note }: { note: Note }) => {
  const { _id, body, title, user } = note;

  const StyledOuterCard = styled.div`
    display: flex;
    flex-flow: column;
    margin: 0.4rem;
  `;

  const StyledContent = styled.div`
    .title {
      border: black solid;
    }
    .body {
      border: black solid;
    }
  `;

  return (
    <StyledOuterCard>
      <StyledContent>
        <h3 className='title'>{title}</h3>
        <p className='body'>{body}</p>
      </StyledContent>
    </StyledOuterCard>
  );
};

export default NoteCard;
