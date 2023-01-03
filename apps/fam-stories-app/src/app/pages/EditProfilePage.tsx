import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AddMemberForm } from '../components/AddFamilyMember';
import { AddRelationship } from '../components/AddRelationship';
import { AddFamForm } from '../components/AddForm';
import { OuterWrapper, InnerWrapper } from '../components/GlobalStyles';

export const EditProfilePage = () => {

  return (
    <OuterWrapper>
      <Header />
        <InnerWrapper>
            <AddFamForm>
              <AddMemberForm />
              <AddRelationship />
            </AddFamForm>
            <Footer />
        </InnerWrapper>
    </OuterWrapper>
  )
};