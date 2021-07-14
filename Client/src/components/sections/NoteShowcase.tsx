import React from 'react';
import styled from 'styled-components';
import NoteCard from '../NoteCard';
import { Note } from '../../interfaces/NoteTypes';

type Props = {
  notes: Note[];
  deleteNote: (noteId: number) => void;
};

const StyledNoteSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

const NoteShowcase = (props: Props) => {
  const notesArr = props.notes;
  console.log(notesArr);
  let mappedNotes = notesArr.map(note => {
    return (
      <NoteCard deleteNote={props.deleteNote} key={note._id} note={note} />
    );
  });

  return <StyledNoteSection>{mappedNotes}</StyledNoteSection>;
};

export default NoteShowcase;
