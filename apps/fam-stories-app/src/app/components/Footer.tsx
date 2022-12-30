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
    width: 80%;
    height: 10vh;
    border: solid 2px var(--color-darkerRed);;
    border-radius: 5px;
    text-align: end;
    justify-content: end;
    padding-right: 1em;
    background-color: var(--color-lighterRed);
`


