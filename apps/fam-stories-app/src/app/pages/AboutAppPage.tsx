import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BackButton, InnerWrapper, OuterWrapper, ThirdTitle } from '../components/GlobalStyles';

export const AboutAppPage = () => {
    const navigate = useNavigate();
    const onHomeButtonClick = () => {
      navigate('/');
    }
    return (
        <OuterWrapper>
             <Header />
            <InnerWrapper>
                <TextWrapper>
                <ThirdTitle> FamStories is intended to be an interactive app for you to see your family roots take place and for you and your family to fill the roots with history. For the root system to take form you simply add a relative in the "add form". When you have added the relative you can now click on that person to come to their profile page. Here you can add photographies, texts, videos/audio of the person. In the future it is meant that you and your family have access to the profile pages so that everybody can edit and take part of everyones memories</ThirdTitle>
                <BackButton type="button" onClick={onHomeButtonClick}>Return to Home</BackButton>
                </TextWrapper>
                <Footer />
            </InnerWrapper>
        </OuterWrapper>
    )
}  

export const TextWrapper = styled.div`
    display: block;
    width: 80%;
`