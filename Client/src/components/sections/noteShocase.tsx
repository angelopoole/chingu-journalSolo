import React from 'react';
import styled from 'styled-components';
import NoteCard from '../NoteCard';

type Note = {
  _id: number;
  title: string;
  body: string;
  user: string;
};
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
    return <NoteCard note={note} />;
  });

  return <StyledNoteSection>{mappedNotes}</StyledNoteSection>;
};

export default NoteShocase;
