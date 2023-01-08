import React from "react";
import styled from "styled-components";
import { BodyText } from "./GlobalStyles";

export const Footer = () => {
    return (
      <FooterWrapper>
        <FooterText>
          <BodyText> Made by Fanny Cardell at Technigo 2022/23 </BodyText>
          </FooterText>  
      </FooterWrapper>
    )
  };

const FooterText = styled.div`
  padding-right: 5em;
`

export const FooterWrapper = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    bottom: 0%;
    width: 100%;
    height: 10vh;
    outline: dotted 2px var(--color-white);;
    border-radius: 2px;
    text-align: end;
    justify-content: end;
    color: var(--color-white); 
    background-color: var(--color-lighterRed);
`