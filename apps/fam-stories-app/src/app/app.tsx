import styled from 'styled-components';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RootsPage } from './components/RootsPage';
import { ProfilePage } from './components/ProfilePage';
import { AboutAppPage } from './components/AboutAppPage';
import { UserPage } from './components/UserPage';
import { ListFamilyMembers } from './components/ListFamilyMembers';
import NotFound from './components/NotFound';

const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    color: var(--color-black);
    background-color: var(--color-white);
`;

export const App = () => {
  return (
    <StyledApp>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RootsPage />} />
            <Route path="/profilepage" element={<ProfilePage />} /> 
            <Route path="/aboutpage" element={<AboutAppPage />} />
            <Route path="/userpage" element={<UserPage />} />
            <Route path="/listfamilymembers" element={<ListFamilyMembers />} />    
            <Route path="/404" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
      </Provider>
    </StyledApp>
  );
}

export default App;


/* 
    <Route path="*" element={<Navigate to="/404" replace />} />

    :id ska läggas till på /ProfilePage/
*/