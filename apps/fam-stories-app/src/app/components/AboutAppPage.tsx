import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Button, InnerWrapper, OuterWrapper, SubTitle } from './GlobalStyles';

export const AboutAppPage = () => {
    const navigate = useNavigate();
    const onHomeButtonClick = () => {
      navigate('/');
    }
    return (
        <OuterWrapper>
            <InnerWrapper>
                <Header />
                <SubTitle> A little text about the project FamStories and Technigo</SubTitle>
                <Button type="button" onClick={onHomeButtonClick}>Return to Home Page</Button>
                <Footer />
            </InnerWrapper>
        </OuterWrapper>
    )
}