import React from 'react';
import styled from 'styled-components';
import { Note } from '../interfaces/NoteTypes';

// TODO, fix how cards are created, instead go with a 4 area grid so that the outer card controlls the coloring on hover.
// TODO, onclick notes should open into modal.
// TODO, edit and delete should be done inside modal
// TODO, edits done inside of the modal should be sent to the backed after a typing delay, 5000ms
// TODO, remove edit and delete buttons from card.
// TODO, stop card overflow, this causes responsiveness breaks.

const StyledCardContainer = styled.div`
  margin: 10px;
  background-color: var(--light-shades);
`;

const StyledCard = styled.div`
  height: 100%;
  border: 2px solid var(--dark-accent);
  border-radius: 0.5em;
`;

const StyledContentContainer = styled.div`
  padding: 5px;
  display: flex;
  height: 85%;
`;

const StyledContent = styled.div`
  min-height: 60px;
`;

const StyledTitle = styled.div``;

const StyledBodyContainer = styled.div``;

const StyledBody = styled.div``;

const StyledflexButtons = styled.div`
  display: flex;
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
    <StyledCardContainer id='1 CardContainer'>
      <StyledCard id=' 2 Card'>
        <StyledContentContainer id=' 3 Info and flexdecision container'>
          <StyledContent id='4 titleBodyContent'>
            <StyledTitle id='title'>{title}</StyledTitle>
            <StyledBodyContainer id='bodyContiner'>
              <StyledBody id='body'>{body}</StyledBody>
            </StyledBodyContainer>
          </StyledContent>
        </StyledContentContainer>
        <StyledflexButtons id=' 3 interactionIcons -Flex'>
          <button onClick={() => handleModalAndSetEditNote(note)}>edit</button>
          <button onClick={() => deleteNote(_id)}>delete</button>
        </StyledflexButtons>
      </StyledCard>
    </StyledCardContainer>
  );

  // return (
  //   <StyledOuterCard>
  //     <StyledContent>
  //       <h3 className='title'>{title}</h3>
  //       <p className='body'>{body}</p>
  //     </StyledContent>
  //     <StyledButtonContainer className='button-container'>
  //       <button onClick={() => handleModalAndSetEditNote(note)}>edit</button>
  //       <button onClick={() => deleteNote(_id)}>delete</button>
  //     </StyledButtonContainer>
  //   </StyledOuterCard>
  // );
};

export default NoteCard;

{
  /* <StyledOuterCard>
<StyledContent>
  <h3 className='title'>{title}</h3>
  <p className='body'>{body}</p>
</StyledContent>
<StyledButtonContainer className='button-container'>
  <button onClick={() => handleModalAndSetEditNote(note)}>edit</button>
  <button onClick={() => deleteNote(_id)}>delete</button>
</StyledButtonContainer>
</StyledOuterCard> */
}
