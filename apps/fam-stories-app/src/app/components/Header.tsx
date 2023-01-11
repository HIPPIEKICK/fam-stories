/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';

import { Title, SubTitle, Devices } from './GlobalStyles';

export const Header = () => {
  return (
    <HeaderContainer>
        <HeaderWrapper>
            <Title> <span>FamStories</span></Title>
            <SubTitle2>
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
              </SubTitle2>
        </HeaderWrapper>    
      </HeaderContainer>
  )
};

export const HeaderWrapper = styled.div`
    position: absolute;
    top: 2em;
    left: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: fit-content;
    width: fit-content;
    //border: solid yellow 3px;
    z-index: 5;
    
@media ${Devices.tablet} {
    top: 2.5em;  
    left: 0.75em;
    }
@media ${Devices.laptop} {
    top: 3em;  
    left: 3em;
    } 
`

export const HeaderContainer = styled.div`
    position: absolute;
    top: 2em;
    left: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20em;
    height: 12em;
    color: var(--color-white);
    background-color: var(--color-lighterRed);
    opacity: 0.9;
    border-radius: 50%;
    border: 2px dotted var(--color-white);
    box-shadow: 3px 3px 10px grey;
    z-index: 10;

  @media ${Devices.laptop} {
      top: 6em;
      left: 5em;  
      width: 28em;
      height: 16em;
  } 
`
export const SubTitle2 = styled(SubTitle)`
  font-size: 1em;
  max-width: 35ch;
  text-align: center;

@media ${Devices.laptop} {
  font-size: 1.5em;
  max-width: 35ch;  
  } 
`
