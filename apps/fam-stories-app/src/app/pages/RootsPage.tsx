import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AddMemberForm } from '../components/AddFamilyMember';
import { AddRelationship } from '../components/AddRelationship';
import { AddFamForm } from '../components/AddForm';
import { OuterWrapper, InnerWrapper, SubTitle, BodyText, StartButton } from '../components/GlobalStyles';

export const RootsPage = () => {

  return (
    <OuterWrapper>
      <Header />
        <InnerWrapper>
            <SubTitle> Here will the d3 graph make some kind of root system</SubTitle>
            <StartButton>Start</StartButton>
            <BodyText> An add and close button to show the form</BodyText>
            <AddFamForm>
              <AddMemberForm />
              <AddRelationship />
            </AddFamForm>
            <Footer />
        </InnerWrapper>
    </OuterWrapper>
  )
};