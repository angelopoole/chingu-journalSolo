import React, { ChangeEvent, useState, useEffect, FormEvent } from 'react';
import styled from 'styled-components';
import { Note } from '../../interfaces/NoteTypes';

import { Edit, X } from '@styled-icons/feather';

// TODO: GET MODAL FUNCTIONAL AGAIN
// TODO: HAVE MODAL BE RESPONSIVE
// TODO: GET USEONCLICKOUTSIDE WORKING
// TODO: REFACTOR HOW TOGGLE MODAL WORKS

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  /* background-color: red; */
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;

const StyledEditModalContainer = styled.div`
  position: fixed;
  left: 20%;
  top: 12em;

  padding: 1em;
  background-color: transparent;

  z-index: 200;
`;

const StyledModal = styled.div`
  width: 37.5em;
  border-radius: 0.5em;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 60%), 0 4px 8px 3px rgb(0 0 0 / 30%);
`;

const StyledInfoAndContentContainer = styled.div`
  background-color: var(--light-shades);
  border: solid var(--light-accent);
  border-radius: inherit;
`;

const StyledToolbarContainer = styled.div`
  display: flex;

  #close-button {
  }
`;
const StyledToolbar = styled.div`
  display: flex;
`;

const ContentContainer = styled.div``;

const StyledTitle = styled.input`
  width: 100%;
  border: none;
  background-color: inherit;
  outline: none;
`;

const StyledBody = styled.textarea`
  width: 100%;
  border: none;
  background-color: inherit;

  resize: none;
  width: 100%;
  min-height: 100px;
  padding: 5px;
  overflow: hidden;
  box-sizing: border-box;
  outline: none;
  &:focus {
    border: none;
  }
`;

// test typings inside of react comp :-)
type EditNoteModalProps = {
  showModal: boolean;
  toggleEditModal: () => void;
  noteToEdit: Note | undefined;
  handleEditNoteSubmit: (
    titlebody: { title: string; body: string },
    e: FormEvent
  ) => void;
};

const EditNoteModal = ({
  showModal,
  toggleEditModal,
  noteToEdit,
  handleEditNoteSubmit,
}: EditNoteModalProps) => {
  const [noteState, setNoteState] = useState({
    title: '',
    body: '',
  });

  // take in note title and body, prepopulate textarea and title with info.

  useEffect(() => {
    if (noteToEdit === undefined) {
      return;
    } else {
      setNoteState({ title: noteToEdit?.title, body: noteToEdit?.body });
    }
  }, [noteToEdit]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setNoteState({ ...noteState, [name]: value });
  };

  let dateNow = new Date();

  let shownDate = dateNow.toString().slice(0, 10);

  // https://css-tricks.com/the-cleanest-trick-for-autogrowing-textareas/ <- imlpiment

  return (
    <>
      {showModal && (
        <>
          <ModalBackground onClick={() => toggleEditModal()} />
          <StyledEditModalContainer id='modal-container'>
            <StyledModal id='modal'>
              <StyledInfoAndContentContainer id='info-and-content-container'>
                <ContentContainer id='content'>
                  <StyledTitle
                    value={noteState.title}
                    name='title'
                    type='text'
                    onChange={e => handleChange(e)}
                    autoComplete='off'
                  />
                  <StyledBody
                    value={noteState.body}
                    name='body'
                    onChange={e => handleChange(e)}
                    autoComplete='off'
                  />
                  <br />
                  <div id='edit-date'>{shownDate}</div>
                </ContentContainer>
                <StyledToolbarContainer id='toolbar'>
                  <StyledToolbar id='flex-toolbar'>
                    <button>
                      Delete Note
                      <X size='24' className='toolbar-svg' />
                    </button>
                  </StyledToolbar>
                  <button id='close-button'></button>
                </StyledToolbarContainer>
              </StyledInfoAndContentContainer>
            </StyledModal>
          </StyledEditModalContainer>
        </>
      )}
    </>
  );
};

export default EditNoteModal;

// <StyledFormBackground>
// <StyledFormContainer
//   onSubmit={e => handleEditNoteSubmit(noteState, e)}
// >
//   <label className='label'>
//     title:
//     <br />
//   </label>
//   <input
//     className='title'
//     value={noteState.title}
//     name='title'
//     type='text'
//     onChange={e => handleChange(e)}
//     autoComplete='off'
//   />
//   <br />
//   <label className='label'>
//     body:
//     <br />
//   </label>
//   <br />
//   <textarea
//     value={noteState.body}
//     name='body'
//     onChange={e => handleChange(e)}
//     className='body'
//     autoComplete='off'
//   />
//   <input className='submit' name='submit' type='submit' />
// </StyledFormContainer>
// </StyledFormBackground>
