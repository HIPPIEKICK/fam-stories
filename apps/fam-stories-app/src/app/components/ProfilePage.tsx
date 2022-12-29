import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { OuterWrapper, InnerWrapper, SubTitle, Button  } from './GlobalStyles';

export const ProfilePage = () => {
    const navigate = useNavigate();
    const onHomeButtonClick = () => {
    navigate('/profilepage');
  }
    return (
        <OuterWrapper>
            <InnerWrapper>
                <Header />
                <SubTitle> Här är en sida för att addera information om varje familjemedlem om det finns. Exempelvis tester, foton, videos, eller annat som recept eller tidningsutklipp.
                </SubTitle>
                <Button type="button" onClick={onHomeButtonClick}>Return to Home Page</Button>
                <Footer />
            </InnerWrapper>
        </OuterWrapper>
    )
}