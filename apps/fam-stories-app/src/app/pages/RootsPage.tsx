import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AddMemberForm } from '../components/AddFamilyMember';
import { AddRelationship } from '../components/AddRelationship'
import { OuterWrapper, InnerWrapper, SubTitle, BodyText } from '../components/GlobalStyles';

export const RootsPage = () => {
  return (
    <OuterWrapper>
        <InnerWrapper>
            <Header />
            <SubTitle> Here will the d3 graph make some kind of root system</SubTitle>
            <BodyText> And also an add button with a dropdown form to add relatives</BodyText>
            <AddForm>
              <AddMemberForm />
              <AddRelationship />
            </AddForm>
            <Footer />
        </InnerWrapper>
    </OuterWrapper>
  )
};

export const AddForm = styled.div`
    display: flex;
    
`