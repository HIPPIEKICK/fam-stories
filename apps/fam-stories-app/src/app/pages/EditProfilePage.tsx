import React, { useEffect } from 'react';
import { Footer } from '../components/Footer';
import { AddMemberForm } from '../components/AddFamilyMember';
import { AddRelationship } from '../components/AddRelationship';
import {  useAppDispatch, useAppSelector } from "../store/store";
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper, BackButton, TextWrapper, Title, BodyText, RelList, Devices } from '../components/GlobalStyles';
import { useNavigate, useParams } from 'react-router-dom';
import { Navbar } from '../components/NavBar';
import { FamContainer, FamWrapper } from '../components/ListFamilyMembers';
import { getEveryone } from '../store/familyMembersSlice';

export const EditProfilePage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => { 
      dispatch(getEveryone());
  }, [dispatch]);
  
  const familyMembers = useAppSelector ((store) => store.familyMembers.familyMembers)
  const { familyMemberId } = useParams();
  const familyMember = familyMembers.find((familyMember) => familyMember._id === familyMemberId);

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
      return <BodyText>
       <div>
                      {JSON.stringify(familyMembers)}
                  </div>

                  <div>{familyMemberId}</div>
      <div>Family member not found!!!!</div></BodyText>
  }


    const listOfRelationships =  familyMember.relationships ? familyMember.relationships.map((relationship) => {
    const relationMember = familyMembers.find((familyMember) => familyMember._id === relationship.familyMemberId) 
      return <div> is {relationship.relationtype} to {relationMember?.name}</div>
      //<Editbutton>X</Editbutton>
      // type="button" onClick={() => onRemoveClick(relationship)}
  }) : null;
  
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