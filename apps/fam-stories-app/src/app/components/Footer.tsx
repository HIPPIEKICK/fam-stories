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
    position: absolute;
    display: flex;
    flex-direction: column;
    bottom: 0%;
    width: 100%;
    height: 10vh;
    outline: solid 4px var(--color-darkerRed);;
    border-radius: 5px;
    text-align: end;
    justify-content: end;
    background-color: var(--color-lighterRed);
`


