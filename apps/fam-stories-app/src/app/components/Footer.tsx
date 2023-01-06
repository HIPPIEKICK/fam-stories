import React from "react";
import styled from "styled-components";
import { BodyText } from "./GlobalStyles";

export const Footer = () => {
    return (
      <FooterWrapper>
          <BodyText> Made by Fanny Cardell at Technigo 2022/23 </BodyText>
      </FooterWrapper>
    )
  };

const FooterWrapper = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    bottom: 0%;
    width: 100%;
    height: 10vh;
    padding-right: 5em;
    outline: dotted 2px var(--color-darkerRed);;
    border-radius: 2px;
    text-align: end;
    justify-content: end;
    color: var(--color-white); 
    background-color: var(--color-lighterRed);
`