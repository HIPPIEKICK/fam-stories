import { useParams, useNavigate } from 'react-router-dom';
import {  useAppSelector,useAppDispatch  } from "../store/store";
import { Footer } from '../components/Footer';
import { OuterWrapper, InnerWrapper, ThirdTitle, BackButton, BodyText, TextWrapper, Title, RelList, EditButton } from '../components/GlobalStyles';
import { Navbar } from '../components/NavBar';
import { FamContainer, FamWrapper } from '../components/ListFamilyMembers';
import styled from 'styled-components';
import { useEffect } from 'react';
import { getEveryone } from '../store/familyMembersSlice';
import { Relationship } from '@fam-stories/common-utils';

export const ProfilePage = () => {
    
    const dispatch = useAppDispatch();
    useEffect(() => { 
        dispatch(getEveryone());
    }, [dispatch]);

    const familyMembers = useAppSelector ((store) => store.familyMembers.familyMembers)
    const { familyMemberId } = useParams();

    const familyMember = familyMembers.find((familyMember) => familyMember._id === familyMemberId);
    
    const navigate = useNavigate();
    const onHomeButtonClick = () => {
        navigate('/main');
    }
    const onToFamListClick = () => {
        navigate ('/listfamilymembers');
    }

    if(!familyMember) {
        return <BodyText>
         <div>{JSON.stringify(familyMember)}</div>
        <div>{familyMemberId}</div>
        <div>Family member not found!!!!</div></BodyText>
    }

    const listOfRelationships = familyMember.relationships ? familyMember.relationships.map((relationship:Relationship) => {
        const relationMember = familyMembers.find((familyMember) => familyMember._id === relationship.familyMemberId) 
        return <div> is {relationship.relationtype} to {relationMember?.name} </div>
        //<Editbutton>X</Editbutton>
      // type="button" onClick={() => onRemoveClick(relationship)}
    }) : null;
        return (
            <OuterWrapper>
                <InnerWrapper>
                <Navbar />
                <FamContainer>
                   
                    <FamWrapper>
                        <Title> <span>{familyMember.name}</span></Title>
                        </FamWrapper>    
                    </FamContainer>
                    <TextWrapper>
                    <ThirdTitle>{familyMember.name}</ThirdTitle>
                    <BodyText>
                       Born: {familyMember.birthYear} <br />
                       Lives: {familyMember.locality} <br />
                        {familyMember.title} <br />
                    </BodyText>
                    <RelList2>{listOfRelationships}</RelList2>
                    <EditButton>Add Text</EditButton>
                    <EditButton>Add Photo</EditButton>
                    <BodyText>
                        This is a profile page to add information and history about that specific familymember.<br />
                        And even things like photos, videos, or recepies, articles or other thing you have.</BodyText>
                    <BackButton type="button" onClick={onHomeButtonClick}>Return to Roots</BackButton>
                    <BackButton type="button" onClick={onToFamListClick}>To Family list</BackButton>
                    </TextWrapper> 
                    <Footer />
                </InnerWrapper>
            </OuterWrapper>
        )
    }    

    const RelList2 = styled(RelList)`
        margin: 0em;
        width: 30%;
    `