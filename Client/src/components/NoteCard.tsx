import React from 'react';
import styled from 'styled-components';
import { Note } from '../interfaces/NoteTypes';
import { Edit, X } from '@styled-icons/feather';

// TODO, onclick notes should open into modal.
// TODO, edit and delete should be done inside modal
// TODO, edits done inside of the modal should be sent to the backed after a typing delay, 5000ms
// TODO, remove edit and delete buttons from card.
// TODO, allow user to change the color of their note and save it to the note database.

const StyledCardContainer = styled.div`
  margin: 10px;
  width: 95%;

  background-color: ${props => props.color || 'var(--light-shades)'};

  overflow-wrap: break-word;

  button {
    transition: ease-in 0.2s;
    color: transparent;
  }

  :hover {
    button {
      color: black;
    }
  }
`;

const StyledCard = styled.div`
  height: 100%;
  border: 2px solid var(--dark-accent);
  border-radius: 0.5em;
`;

const StyledContentContainer = styled.div`
  padding: 5px 16px 0px;
  min-height: 85%;
`;

const StyledContent = styled.div`
  min-height: 10em;
`;

const StyledTitle = styled.div`
  font-size: 1.2em;
`;

const StyledBodyContainer = styled.div`
  padding-top: 0.5em;
`;

const StyledBody = styled.div`
  min-height: 30px;
`;

const StyledflexButtons = styled.div`
  display: flex;
  flex-flow: row-reverse;
  /* padding-bottom: 10em; */
`;

const StyledToolBar = styled.div`
  display: flex;

  button {
    padding-bottom: 1em;
    border-radius: 50%;
  }

  button:hover {
    cursor: pointer;

    .toolbar-svg {
      color: var(--light-accent);
    }
  }
`;

const StyledHorizontalRule = styled.hr`
  margin: 0em;
  border-radius: 5px;
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

  let titleText = title.length > 25 ? title.slice(0, 25) + '\u2026' : title;
  let bodyText = body.length > 200 ? body.slice(0, 200) + '\u2026' : body;

  return (
    <StyledCardContainer id='1 CardContainer'>
      <StyledCard id=' 2 Card'>
        <StyledContentContainer
          id=' 3 Info and flexdecision container'
          onClick={() => handleModalAndSetEditNote(note)}
        >
          <StyledContent id='4 titleBodyContent'>
            <StyledTitle id='title'>{titleText || 'title'}</StyledTitle>
            <StyledHorizontalRule />
            <StyledBodyContainer id='bodyContiner'>
              <StyledBody id='body'>{bodyText || 'Write a note...'}</StyledBody>
            </StyledBodyContainer>
          </StyledContent>
        </StyledContentContainer>
        <StyledflexButtons id=' 3 interactionIcons -Flex'>
          <StyledToolBar>
            <button onClick={() => handleModalAndSetEditNote(note)}>
              <Edit size='24' className='toolbar-svg' />
            </button>
            <button onClick={() => deleteNote(_id)}>
              <X size='24' className='toolbar-svg' />
            </button>
          </StyledToolBar>
        </StyledflexButtons>
      </StyledCard>
    </StyledCardContainer>
  );
};

export default NoteCard;
