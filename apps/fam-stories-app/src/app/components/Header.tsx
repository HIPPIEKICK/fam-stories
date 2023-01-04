/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';

import { Title, SubTitle } from './GlobalStyles';
import { Navbar } from './NavBar';
import brightrootsMini from '../images/brightrootsMini.jpg'

export const Header = () => {
  return (
    <><Picture>
            <img src={brightrootsMini} alt="Roots" />
             <Navbar />
      </Picture>
      <HeaderWrapper>  
            <Title> FamStories</Title>
            <SubTitle> See your roots take place and water them with history </SubTitle>
    </HeaderWrapper></>
  )
};

export const HeaderWrapper = styled.section`
    position: absolute;
    top: 2%;
    left: 15%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 25vh;
    padding: 0.5em;
    line-height: 1;
    color: var(--color-white);
`
export const Picture = styled.div`
    position: relative;
    background-color: var(--color-lighterRed);
    background-image: url(${brightrootsMini});
    background-size: cover;
    width: 80%;
    opacity: 0.9;
    `