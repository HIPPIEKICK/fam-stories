import React from "react";
import styled from "styled-components";
import { BodyText } from "./GlobalStyles";
import { HeaderWrapper } from "./Header";

export const Footer = () => {
    return (
      <FooterWrapper>
          <BodyText> Made by Fanny Cardell at Technigo 2022/23 </BodyText>
      </FooterWrapper>
    )
  };

const FooterWrapper = styled(HeaderWrapper)`
    height: 10vh;
    text-align: end;
    margin-right: 1em;
`
