import React from 'react';
import styled from 'styled-components';
import NoteCard from '../NoteCard';
import { Note } from '../../interfaces/NoteTypes';

type Props = {
  notes: Note[];
};

const StyledNoteSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

const NoteShocase = (props: Props) => {
  const notesArr = props.notes;
  console.log(notesArr);
  let mappedNotes = notesArr.map(note => {
    return <NoteCard key={note._id} note={note} />;
  });

  return <StyledNoteSection>{mappedNotes}</StyledNoteSection>;
};

export default NoteShocase;
