import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { editFamilyMember, FamilyMember, hydrateFamilyMember } from "../store/familyMembersSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
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
            <Button onClick={() => dispatch(editFamilyMember(familyMember.id))}>Redact</Button>
            </li>
        );
    });

    return (
        <OuterWrapper>
            <InnerWrapper>
            <Header />
            <SubTitle> Here is a list of all family members added</SubTitle>   
            <ul>{listOfFamilyMembers}</ul> 
            <Button type="button" onClick={onHomeButtonClick}>Return to Home Page</Button> 
            <Footer />
            </InnerWrapper>
        </OuterWrapper>);
};