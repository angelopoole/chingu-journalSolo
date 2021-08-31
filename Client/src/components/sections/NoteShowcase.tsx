import React from 'react';
import styled from 'styled-components';
import NoteCard from '../NoteCard';
import { Note } from '../../interfaces/NoteTypes';

type Props = {
  notes: Note[];
  deleteNote: (noteId: string) => void;
  toggleEditModal: () => void;
  handleSetNoteToEdit: (note: Note) => void;
};

const StyledNoteSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
  grid-auto-rows: minmax(10em, 1fr);
  > {
    word-wrap: break-word;
  }
`;

const NoteShowcase = (props: Props) => {
  const notesArr = props.notes;

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
