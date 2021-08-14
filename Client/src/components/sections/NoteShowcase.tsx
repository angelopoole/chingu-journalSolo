import React from 'react';
import styled from 'styled-components';
import NoteCard from '../NoteCard';
import { Note } from '../../interfaces/NoteTypes';

type Props = {
  notes: Note[];
  deleteNote: (noteId: number) => void;
  toggleEditModal: () => void;
  handleSetNoteToEdit: (note: Note) => void;
};

const StyledNoteSection = styled.section`
  display: grid;

  opacity: 0.8;
  background-image: radial-gradient(
      var(--light-accent) 0.8px,
      transparent 0.8px
    ),
    radial-gradient(var(--light-accent) 0.8px, var(--light-shades) 0.8px);
  background-size: 32px 32px;
  background-position: 0 0, 16px 16px;

  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: repeat(3, 1fr);
`;

const NoteShowcase = (props: Props) => {
  const notesArr = props.notes;
  console.log(notesArr);
  let mappedNotes = notesArr.map(note => {
    return (
      <NoteCard
        deleteNote={props.deleteNote}
        key={note._id}
        note={note}
        toggleEditModal={props.toggleEditModal}
        handleSetNoteToEdit={props.handleSetNoteToEdit}
      />
    );
  });

  return <StyledNoteSection>{mappedNotes}</StyledNoteSection>;
};

export default NoteShowcase;
