import { useParams, useNavigate } from 'react-router-dom';
import {  useAppSelector  } from "../store/store";
import styled from 'styled-components';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { OuterWrapper, InnerWrapper, ThirdTitle, BackButton, BodyText, SubTitle  } from '../components/GlobalStyles';

export const ProfilePage = () => {
    const familyMembers = useAppSelector ((store) => store.familyMembers.familyMembers)
    const { familyMemberId } = useParams();

    const familyMember = familyMembers.find((familyMember) => familyMember.id === familyMemberId);
    
    const navigate = useNavigate();
    const onHomeButtonClick = () => {
        navigate('/');
    }
    if(!familyMember) {
        return <BodyText>Family member not found</BodyText>
    }

    const listOfRelationships =  familyMember.relationships.map((relationship) => {
        const relationMember = familyMembers.find((familyMember) => familyMember.id === relationship.familyMemberId) 
        return <div>{relationship.relationtype} - {relationMember?.name} </div>
    });

        return (
            <OuterWrapper>
                <Header />
                <InnerWrapper>
                    <ProfileWrapper>
                    <ThirdTitle>{familyMember.name}</ThirdTitle>
                    <BodyText>
                       Born: {familyMember.birthYear} <br />
                       Lives: {familyMember.locality} <br />
                        {familyMember.title} <br />
                    </BodyText>
                    <BodyText>{listOfRelationships} <br /> </BodyText>
                    </ProfileWrapper>    
                    <BodyText>
                        Här är en sida för att addera information om varje familjemedlem om det finns. <br />
                        Exempelvis tester, foton, videos, eller annat som recept eller tidningsutklipp.</BodyText>
                    
                    <BackButton type="button" onClick={onHomeButtonClick}>Return to Roots</BackButton>
                    <Footer />
                </InnerWrapper>
            </OuterWrapper>
        )
    }    

    export const ProfileWrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 80%;
        padding-left: 10%;
        margin-top: 5%;
        //border: 2px solid var(--color-green);
    `