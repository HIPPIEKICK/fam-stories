import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { BackButton, BodyText, InnerWrapper, Title, TextWrapper, OuterWrapper, HeaderContainer, HeaderWrapper, SubTitle } from '../components/GlobalStyles';
import { Navbar } from '../components/NavBar';

export const AboutAppPage = () => {
    const navigate = useNavigate();
    const onHomeButtonClick = () => {
      navigate('/main');
    }
    return (
        <OuterWrapper>
            <InnerWrapper>
                <Navbar />
                <HeaderContainer>
                    <HeaderWrapper>
                        <Title> <span>About</span></Title>
                        </HeaderWrapper>    
                    </HeaderContainer>
                <TextWrapper>
                <SubTitle>About FamStories</SubTitle>  
                    <BodyText> FamStories is intended to be an interactive app for you to see your family roots take place and for you and your family to fill the roots with history. </BodyText>
                    <BodyText>  For the root system to take form you simply add a relative in the "add form". When you have added the relative you can now click on that person to come to their profile page.</BodyText> 
                    <BodyText>  Here you can add photographies, texts, videos/audio of the person. In the future it is meant that you and your family have access to the profile pages so that everybody can edit and take part of everyones memories.</BodyText>
                <BackButton type="button" onClick={onHomeButtonClick}>Return to Home</BackButton>
                </TextWrapper>
            <Footer />
        </InnerWrapper>
    </OuterWrapper>
    )
}  
