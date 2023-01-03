import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { OuterWrapper, InnerWrapper, SubTitle, BackButton } from '../components/GlobalStyles';

const NotFound = () => {
  const navigate = useNavigate();
  const onHomeButtonClick = () => {
    navigate('/');
  }
  return (
    <OuterWrapper>
      <Header />
        <InnerWrapper>
            <SubTitle>Sorry there is no such page</SubTitle>
            <BackButton type="button" onClick={onHomeButtonClick}>Return to Home Page</BackButton>
            <Footer />
      </InnerWrapper>
    </OuterWrapper>
 );
}
export default NotFound;