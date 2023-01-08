/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';

import { Title, SubTitle } from './GlobalStyles';
import brightrootsMini from '../images/brightrootsMini.jpg'
import blobheader from '../images/blobheader.svg'

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>  
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
              <br />
              <span>with</span>
              <span>history</span>
              </SubTitle>
            <Picture>
          <img src={blobheader} alt="Your SVG" />
          </Picture>
      </HeaderContainer>
    </HeaderWrapper>
  )
};

export const HeaderWrapper = styled.section`
    position: relative;
    right: 15%;
    top: 1.5em;
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: center;
    text-align: center;
    width: 45%;
    height: 20em;
    opacity: 0.9;
    border: solid black 2px;
`

export const HeaderContainer = styled.div`
    position: absolute;
    top: -1em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    line-height: 1;
    color: var(--color-white);
    background-color: var(--color-lighterRed);
    height: 12em;
    border-radius: 50%;
    border: 2px dotted var(--color-white);
    box-shadow: 3px 3px 10px grey;
`
export const Picture = styled.div`
    position: relative;
    background-color: var(--color-lighterRed);
    background-image: url(${brightrootsMini});
    background-size: cover;
    `
