import React from 'react';
import { Footer } from '../components/Footer';
import { AddMemberForm } from '../components/AddFamilyMember';
import { AddRelationship } from '../components/AddRelationship';
import { useAppSelector } from "../store/store";
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper, BackButton, TextWrapper, HeaderContainer, HeaderWrapper, Title, BodyText } from '../components/GlobalStyles';
import { useNavigate, useParams } from 'react-router-dom';
import { Navbar } from '../components/NavBar';

export const EditProfilePage = () => {
  const familyMembers = useAppSelector ((store) => store.familyMembers.familyMembers)
  const { familyMemberId } = useParams();

  const familyMember = familyMembers.find((familyMember) => familyMember.id === familyMemberId);

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

    if(!familyMember) {
      return <BodyText>Family member not found</BodyText>
  }

    const listOfRelationships =  familyMember.relationships.map((relationship) => {
      const relationMember = familyMembers.find((familyMember) => familyMember.id === relationship.familyMemberId) 
      return <div> is {relationship.relationtype} to {relationMember?.name} </div>
  });
  //addera delete buttons!
  return (
    <OuterWrapper>
        <InnerWrapper>
            <Navbar />
            <HeaderContainer>
              <HeaderWrapper>
                <Title> <span>Edit Profile</span></Title>
                </HeaderWrapper>    
                </HeaderContainer>
            <EditWrapper>
            <EditFamForm>
              <AddMemberForm />
              <AddRelationship />
              <RelList>{listOfRelationships}</RelList>
            </EditFamForm>
            <BtnWrapper>
              <BackButton type="button" onClick={onAddMemberClick}>Add more relatives</BackButton>
              <BackButton type="button" onClick={onToFamListClick}>Family list</BackButton>
              <BackButton type="button" onClick={onHomeButtonClick}>Back to Roots</BackButton>
            </BtnWrapper>
            </EditWrapper>
            <Footer />
        </InnerWrapper>
    </OuterWrapper>
  )
};

export const EditFamForm = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 2%;
    padding: 1em;
    background-color: var(--color-white); 
    box-shadow: 2px 2px 2px 2px grey;
    border-radius: 0.5em;
    width: fit-content;
`

const EditWrapper = styled(TextWrapper)`
  display: flex;
  flex-direction:column; 
  align-items: center;
  width: 50%;
`

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1em;
`

export const RelList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5em;
    margin:0.25em;
    width: fit-content;
    background-color: var(--color-lighterRed);
    border: 1px solid var(--color-darkerRed);
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 1em;
    line-height: 1.6;
    color: var(--color-white);
    border-radius: 0.25em;
    box-shadow: 2px 2px 2px grey;
`