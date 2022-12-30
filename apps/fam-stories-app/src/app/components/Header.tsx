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
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 35vh;
    padding:1.5em;
    line-height: 1;
    border-radius: 5px;
    text-align: center;
    color: var(--color-white);
`
export const Picture = styled.div`
    position: relative;
    background-color: var(--color-lighterRed);
    background-image: url(${brightrootsMini});
    background-size: cover;
    width: 100%;
    opacity: 0.9;
`