import { useParams, useNavigate } from 'react-router-dom';
import {  useAppSelector  } from "../store/store";
import { Footer } from '../components/Footer';
import { OuterWrapper, InnerWrapper, ThirdTitle, BackButton, BodyText, TextWrapper, HeaderContainer, Title, HeaderWrapper, RelList } from '../components/GlobalStyles';
import { Navbar } from '../components/NavBar';
import { FamContainer, FamWrapper } from '../components/ListFamilyMembers';
import styled from 'styled-components';

export const ProfilePage = () => {
    const familyMembers = useAppSelector ((store) => store.familyMembers.familyMembers)
    const { familyMemberId } = useParams();

    const familyMember = familyMembers.find((familyMember) => familyMember.id === familyMemberId);
    
    const navigate = useNavigate();
    const onHomeButtonClick = () => {
        navigate('/main');
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
    `