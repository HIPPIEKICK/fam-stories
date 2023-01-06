import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AddMemberForm } from '../components/AddFamilyMember';
import { AddRelationship } from '../components/AddRelationship';
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper, BackButton, AddButton, TextWrapper } from '../components/GlobalStyles';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/NavBar';

export const EditProfilePage = () => {

    const navigate = useNavigate();
    const onHomeButtonClick = () => {
      navigate('/');
    }
    const onAddMemberClick = () => {
      navigate ('/');
    }
    const onToFamListClick = () => {
      navigate ('/listfamilymembers');
    }


  return (
    <OuterWrapper>
        <InnerWrapper>
        <Navbar />
         <Header />
            <TextWrapper>
            <EditFamForm>
              <AddMemberForm />
              <AddRelationship />
              <AddButton type="button" onClick={onAddMemberClick}>Add more relatives</AddButton>
              <AddButton type="button" onClick={onToFamListClick}>To Family list</AddButton>
            </EditFamForm>
            <BackButton type="button" onClick={onHomeButtonClick}>Return to Roots</BackButton>
            </TextWrapper>
            <Footer />
        </InnerWrapper>
    </OuterWrapper>
  )
};

export const EditFamForm = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2%;
    background-color: var(--color-white); 
    box-shadow: 3px 3px 3px 4px grey;
    border-radius: 1em;
`