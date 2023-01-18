import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { OuterWrapper, InnerWrapper, ThirdTitle, BackButton, TextWrapper, Title, SubTitle, BodyText } from '../components/GlobalStyles';
import { Navbar } from '../components/NavBar';
import { FamContainer, FamWrapper } from '../components/ListFamilyMembers';
import { useAppDispatch } from '../store/store';
import { getEveryone } from '../store/familyMembersSlice';
import { setLogout } from '../store/user';

export const UserPage = () => {

  const dispatch = useAppDispatch();
  useEffect(() => { 
      dispatch(getEveryone());
  }, [dispatch]);
  
  const navigate = useNavigate();
  const onHomeButtonClick = () => {
    navigate('/main');
  }

  return (
    <OuterWrapper>
        <InnerWrapper>
          <Navbar />
          <FamContainer>
            <FamWrapper>
                <Title> <span>Users page</span></Title>
              </FamWrapper>                  
            </FamContainer>
            <TextWrapper>
            <SubTitle>The users name</SubTitle>
            <ThirdTitle>Some information about the user and picture</ThirdTitle>
            <BodyText>(And in the future possibility to add familymembers to access shared relatives)</BodyText>
            <BackButton type="button" onClick={onHomeButtonClick}>Return to Home Page</BackButton>
            <BackButton type="button" onClick={() => {
                dispatch(setLogout({}));
                navigate("/");
                }}>Log out</BackButton>
            </TextWrapper>
            <Footer />
         </InnerWrapper>
    </OuterWrapper>
    );
}

