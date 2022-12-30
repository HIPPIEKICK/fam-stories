/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';
import { Title, SubTitle } from './GlobalStyles';
import { Navbar } from './NavBar';
import brightrootsS from '../images/brightrootsS.jpg'

export const Header = () => {
  return (
    <Picture>
          <img src={brightrootsS} alt="Roots" />
      <HeaderWrapper>
              <Navbar />
              <Title> FamStories</Title>
              <SubTitle> See your roots take place and water them with history </SubTitle>
    </HeaderWrapper>
    </Picture>
  )
};

export const HeaderWrapper = styled.section`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 0%;
    height: 30vh;
    padding: 1.5em;
    border: solid 4px purple;
    line-height: 1;
    border-radius: 5px;
    text-align: center;
`
export const Picture = styled.div`
    position: relative;
    background-color: var(--color-lighterRed);
    background-image: url(${brightrootsS});
    outline: 2px solid red;
    opacity: 0.9;
`