import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { BackButton, BodyText, InnerWrapper, Title, TextWrapper, OuterWrapper, HeaderContainer, HeaderWrapper, SubTitle, Devices } from '../components/GlobalStyles';
import { Navbar } from '../components/NavBar';
import styled from 'styled-components';

export const AboutAppPage = () => {
    const navigate = useNavigate();
    const onHomeButtonClick = () => {
      navigate('/main');
    }
    return (
        <OuterWrapper>
            <InnerWrapper>
                <Navbar />
                <AboutContainer>
                    <AboutWrapper>
                        <Title> <span>About</span></Title>
                        </AboutWrapper>    
                    </AboutContainer>
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

export const AboutWrapper = styled(HeaderWrapper)`
    position: absolute;
    left: 4em;
    top: 4em;
    width: 60%;
    z-index: 5;

@media ${Devices.tablet} {
    left: 4em;
    top: 3.5em;
    }

@media ${Devices.laptop} {
    left: 8em;
    top: 2.5em;
    } 
`

export const AboutContainer = styled(HeaderContainer)`
    position: absolute;
    top: 2em;
    left: 1em;
    width: 20em;
    height: 12em;

    @media ${Devices.tablet} {
    top: 5em;
    left: 3em;
    }

@media ${Devices.laptop} {
    
    } 
`