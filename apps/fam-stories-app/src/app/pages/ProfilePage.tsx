import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { OuterWrapper, InnerWrapper, ThirdTitle, Button  } from '../components/GlobalStyles';

export const ProfilePage = () => {
    const navigate = useNavigate();
    const onHomeButtonClick = () => {
    navigate('/');
  }
    return (
        <OuterWrapper>
            <Header />
            <InnerWrapper>
                <ThirdTitle> Här är en sida för att addera information om varje familjemedlem om det finns. Exempelvis tester, foton, videos, eller annat som recept eller tidningsutklipp.
                </ThirdTitle>
                <Button type="button" onClick={onHomeButtonClick}>Return to Home Page</Button>
                <Footer />
            </InnerWrapper>
        </OuterWrapper>
    )
}