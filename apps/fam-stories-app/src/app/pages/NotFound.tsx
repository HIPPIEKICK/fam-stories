import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { OuterWrapper, InnerWrapper, SubTitle, BackButton, TextWrapper } from '../components/GlobalStyles';
import { Navbar } from '../components/NavBar';

const NotFound = () => {
  const navigate = useNavigate();
  const onHomeButtonClick = () => {
    navigate('/main');
  }
  return (
    <OuterWrapper>
        <InnerWrapper>
        <Navbar />
          <Header />
            <TextWrapper>
            <SubTitle>Sorry there is no such page</SubTitle>
            <BackButton type="button" onClick={onHomeButtonClick}>Return to Home Page</BackButton>
            </TextWrapper>
            <Footer />
      </InnerWrapper>
    </OuterWrapper>
 );
}
export default NotFound;

