import React from 'react';
import { Footer } from '../components/Footer';
import { AddMemberForm } from '../components/AddFamilyMember';
import { AddRelationship } from '../components/AddRelationship';
import {  useAppSelector } from "../store/store";
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper, BackButton, TextWrapper, HeaderContainer, HeaderWrapper, Title, BodyText, RelList, Devices } from '../components/GlobalStyles';
import { useNavigate, useParams } from 'react-router-dom';
import { Navbar } from '../components/NavBar';
import { FamContainer, FamWrapper } from '../components/ListFamilyMembers';

export const EditProfilePage = () => {
  const familyMembers = useAppSelector ((store) => store.familyMembers.familyMembers)
  const { familyMemberId } = useParams();
  const familyMember = familyMembers.find((familyMember) => familyMember.id === familyMemberId);

  //const dispatch = useAppDispatch();

  //const onRemoveClick = (event) => {
  //  dispatch(familyMember.actions.removeItem(event))
  //}

  const navigate = useNavigate();
    const onHomeButtonClick = () => {
      navigate('/main');
    }
    const onAddMemberClick = () => {
      navigate ('/main');
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
      //<button type="button" onClick={() => onRemoveClick(relationship)}></button>
  });
  
  return (
    <OuterWrapper>
        <InnerWrapper>
            <Navbar />
            <FamContainer>
              <FamWrapper>
                <Title> <span>Edit Profile</span></Title>
                </FamWrapper>    
                </FamContainer>
            <EditWrapper>
            <EditFamForm>
              <AddMemberForm />
              <AddRelationship />
            </EditFamForm>
            <RelList>{listOfRelationships}</RelList>
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
const EditWrapper = styled(TextWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;

@media ${Devices.laptop} {
  width: 60%;
  }
`
export const EditFamForm = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2%;
    padding: 1em;
    background-color: var(--color-white); 
    box-shadow: 2px 2px 2px 2px grey;
    border-radius: 0.5em;
    width: fit-content;

@media ${Devices.laptop} {
    flex-direction: row;
  }
`

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1em;
`