/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';
import { Title, SubTitle } from './GlobalStyles';

export const Header = () => {
  return (
    <HeaderWrapper>
        <Title> FamStories</Title>
        <SubTitle> See your roots take place and water them with history </SubTitle>
    </HeaderWrapper>
  )
};

export const HeaderWrapper = styled.section`
    width: 80%;
    height: 25vh;
    padding: 1.5em;
    margin-bottom: 1em;
    border: solid 2px var(--color-green);
    background-color: rgb(120, 52, 56, 0.9);
    line-height: 1;
    border-radius: 5px;
    text-align: center;
    color: var(--color-white); 
`