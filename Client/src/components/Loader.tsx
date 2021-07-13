import React from 'react';
import styled from 'styled-components';

let randomColor = Math.floor(Math.random() * 16777215).toString(16);

const StyledLoader = styled.div`
  display: grid;
  min-height: 100%;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(3, 1fr);

  li {
    height: 15rem;
    text-align: center;
    align-self: center;
    text-align: center;
    list-style: none;

    &:hover {
      background-color: #${randomColor};
      transition: var(--transition);
      cursor: pointer;
    }
  }
`;

const wordLoading = 'loading';
let letterLi = wordLoading.split('').map(letter => {
  return (
    <li>
      <h1>{letter}</h1>
    </li>
  );
});

const Loader = () => {
  return <StyledLoader>{letterLi}</StyledLoader>;
};

export default Loader;
