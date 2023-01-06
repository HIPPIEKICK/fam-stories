import { useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { FamilyMember, hydrateFamilyMember } from "../store/familyMembersSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import styled from "styled-components";
import { Header } from './Header';
import { Footer } from './Footer';
import { OuterWrapper, InnerWrapper, ThirdTitle, BackButton, EditButton, BodyText, TextWrapper } from "./GlobalStyles";
import { Navbar } from "./NavBar";

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
            <li><Link to={`/profilepage/${familyMember.id}`}>{familyMember.name}</Link> </li>- {familyMember.birthYear} - {familyMember.locality} - {familyMember.title}
            <RelationList>{familyRelationshipList}</RelationList>
            <EditButton onClick={() => navigate('/editprofile/' + familyMember.id) }>Edit</EditButton>
            </li>
        );
    });


    return (
        <OuterWrapper>
            <InnerWrapper>
            <Navbar />
                <Header />
                <TextWrapper>
                <ThirdTitle> Here is a list of all your added relatives</ThirdTitle>
                <BodyText>Hover over and click on the family member to go to there profile page</BodyText>   
                <ListWrapper>
                <FamList>{listOfFamilyMembers}</FamList> 
                </ListWrapper>
                <BackButton type="button" onClick={onHomeButtonClick}>Return to Roots</BackButton> 
                </TextWrapper>
                <Footer />
            </InnerWrapper>
        </OuterWrapper>
        );
};

export const FamList = styled.ul`
    font-family: 'Open Sans';
    font-size: 1em;
    font-weight: 600;

    a {
        text-decoration: none;
        color: var(--color-black);
    }

    a:hover {
        font-size: 1.25em;
        transition: 0.5s;
    }
`
export const RelationList = styled(FamList)`
    font-weight: 400;
`
export const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 1em 0em;
    padding: 1em;
    width: 30%;
    background-color: var(--color-whiter);
    border: 2px solid var(--color-green);
`