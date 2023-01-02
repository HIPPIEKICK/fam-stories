import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { editFamilyMember, FamilyMember, hydrateFamilyMember } from "../store/familyMembersSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import styled from "styled-components";
import { Header } from './Header';
import { Footer } from './Footer';
import { OuterWrapper, InnerWrapper, SubTitle, Button } from "./GlobalStyles";

export const ListFamilyMembers = () => {
    const dispatch = useAppDispatch();
    useEffect(() => { 
        dispatch(hydrateFamilyMember());
    }, [dispatch]);

    const familyMembers = useAppSelector<FamilyMember[]>(state => state.familyMembers.familyMembers);
   
    const navigate = useNavigate();
    const onHomeButtonClick = () => {
    navigate('/');
  }

    const listOfFamilyMembers = familyMembers.map((familyMember) => {
        const familyRelationshipList = familyMember.relationships && familyMember.relationships.map((familyRelationship) => { 
            const relationshipMemberData = familyMembers.find((familyMember) => familyMember.id === familyRelationship.familyMemberId);
            return <div>{relationshipMemberData?.name} </div>;
        });
    
        return (
            <li key={familyMember.id}>
            {familyMember.name} - {familyMember.birthYear} 
            <div>{familyRelationshipList}</div>
            <Button onClick={() => dispatch(editFamilyMember(familyMember.id))}>Edit</Button>
            </li>
        );
    });

    return (
        <OuterWrapper>
            <InnerWrapper>
            <Header />
            <SubTitle> Here is a list of all your added relatives</SubTitle>   
            <ListWrapper>
            <FamList>{listOfFamilyMembers}</FamList> 
            </ListWrapper>
            <Button type="button" onClick={onHomeButtonClick}>Return to Home Page</Button> 
            <Footer />
            </InnerWrapper>
        </OuterWrapper>);
};

export const FamList = styled.ul`
    font-family: 'Open Sans';
    font-weight: 400;
`
export const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px;
    
    border: 2px solid purple;
`
