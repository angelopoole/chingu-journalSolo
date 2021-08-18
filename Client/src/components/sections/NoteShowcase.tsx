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

  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));
  /* height: 100%; */
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
