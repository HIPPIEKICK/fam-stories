import { useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { getEveryone } from "../store/familyMembersSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import styled from "styled-components";
import { Footer } from './Footer';
import { OuterWrapper, InnerWrapper, ThirdTitle, BackButton, EditButton, TextWrapper, HeaderContainer, Title, HeaderWrapper, SubTitle, Devices, AddButton } from "./GlobalStyles";
import { Navbar } from "./NavBar";
import { FamilyMember } from "@fam-stories/common-utils";

export const ListFamilyMembers = () => {
    const dispatch = useAppDispatch();
    useEffect(() => { 
        dispatch(getEveryone());
    }, [dispatch]);

    const familyMembers = useAppSelector<FamilyMember[]>(state => state.familyMembers.familyMembers);
   
    const navigate = useNavigate();
    const onHomeButtonClick = () => {
    navigate('/main');
  }

    const listOfFamilyMembers = familyMembers.map((familyMember) => {
        const familyRelationshipList = familyMember.relationships && familyMember.relationships.map((familyRelationship) => { 
            const relationshipMemberData = familyMembers.find((familyMember) => familyMember._id === familyRelationship.familyMemberId);
            return <div>{relationshipMemberData?.name} </div>;
        });

    
        return (
            <li key={familyMember._id}> 
            <li><Link to={`/profilepage/${familyMember._id}`}>{familyMember.name}</Link> </li>- {familyMember.birthYear} - {familyMember.locality} - {familyMember.title}
            <RelationList>{familyRelationshipList}</RelationList> 
            <EditButton onClick={() => navigate('/editprofile/' + familyMember._id) }>Edit</EditButton>
            <AddButton>X</AddButton>
            </li>
            //type="button" onClick={() => onRemoveClick(familyMember)}

            //sort by letters?
        );
    });


    return (
        <OuterWrapper>
            <InnerWrapper>
            <Navbar />
            <FamContainer>
              <FamWrapper>
                <Title><span>Family Members</span></Title>
                  </FamWrapper>    
                </FamContainer>
                <TextWrapper>
                <SubTitle> List of all your added relatives</SubTitle>
                <ThirdTitle>Click on the family members name to go to their profile page</ThirdTitle>   
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
    width: 90%;
    background-color: var(--color-whiter);
    border: 2px solid var(--color-green);

@media ${Devices.tablet} {
    width: 60%;
    }

@media ${Devices.laptop} {
    width: 45%;
    } 
`

export const FamWrapper = styled(HeaderWrapper)`
    position: absolute;
    left: 4em;
    top: 1.5em;
    width: 60%;
    z-index: 5;

@media ${Devices.tablet} {
    top: 1.25em;
    left: 4em;
    }
@media ${Devices.laptop} {
    top: 1.25em;
    left: 5em;
    } 
@media ${Devices.desktop} {
    top: 2.2em;
    left: 8em;
    max-width: 30ch;
    } 
`

export const FamContainer = styled(HeaderContainer)`
    position: absolute;
    top: 2em;
    left: 1em;
    width: 20em;
    height: 12em;

@media ${Devices.tablet} {
    top: 4em;
    left: 3em;
    }
@media ${Devices.laptop} {
    top: 4em;
    left: 5em;
    } 
@media ${Devices.desktop} {
    top: 6em;
    left: 8em;
    }     
`