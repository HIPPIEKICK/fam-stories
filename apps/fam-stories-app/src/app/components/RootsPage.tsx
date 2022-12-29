import React from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { Footer } from './Footer';
import { AddMemberForm } from './AddFamilyMember';
import { AddRelationship } from './AddRelationship'
import { OuterWrapper, InnerWrapper, BodyText } from './GlobalStyles';

export const RootsPage = () => {
  return (
    <OuterWrapper>
        <InnerWrapper>
            <Header />
            <Title> Here will the d3 graph make some kind of root system</Title>
            <BodyText> And also an add button with a dropdown form to add relatives</BodyText>
            <AddMemberForm />
            <AddRelationship />
            <Footer />
        </InnerWrapper>
    </OuterWrapper>
  )
};

const Title = styled.h2`
    background-color: #A8BBA8;
    height: 40vh;
    padding-top: 2%;
    color: #783438;
    font-size: 28px;
    text-align: center;
`