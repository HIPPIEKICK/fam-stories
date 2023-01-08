/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';

import { Title, SubTitle } from './GlobalStyles';

export const Header = () => {
  return (
    <HeaderContainer>
        <HeaderWrapper>
            <Title> <span>FamStories</span></Title>
            <SubTitle>
              <span>See</span>
              <span>your</span>
              <span>roots</span>
              <span>take</span>
              <span>place</span>
              <span>and</span>
              <span>water</span>
              <span>them</span>
              <span>with</span>
              <span>history</span>
              </SubTitle>
        </HeaderWrapper>    
      </HeaderContainer>
  )
};

export const HeaderWrapper = styled.div`
    position: absolute;
    left: -8em;
    top: 4.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: fit-content;
    width: 250%;
    //border: solid yellow 2px;
    z-index: 5;
`

export const HeaderContainer = styled.div`
    position: absolute;
    top: 2em;
    left: 7em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 26em;
    height: 16em;
    color: var(--color-white);
    background-color: var(--color-lighterRed);
    opacity: 0.9;
    border-radius: 50%;
    border: 2px dotted var(--color-white);
    box-shadow: 3px 3px 10px grey;
    z-index: 10;
`
//export const Picture = styled.div`
   // position: relative;
    //background-color: var(--color-lighterRed);
   // background-image: url(${brightrootsMini});
    //background-size: cover;
  //  `
