import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RootsPage } from './pages/MainPage';
import { ProfilePage } from './pages/ProfilePage';
import { AboutAppPage } from './pages/AboutAppPage';
import { UserPage } from './pages/UserPage';
import { ListFamilyMembers } from './components/ListFamilyMembers';
import NotFound from './pages/NotFound';
import { EditProfilePage } from './pages/EditProfilePage';
import  { LogInPage } from './pages/LogInPage';

export const App = () => {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LogInPage />} />
            <Route path="/main" element={<RootsPage />} />
            <Route path="/profilePage/:familyMemberId" element={<ProfilePage />} /> 
            <Route path="/editprofile/:familyMemberId" element={<EditProfilePage />} /> 
            <Route path="/about" element={<AboutAppPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/listfamilymembers" element={<ListFamilyMembers />} />    
            <Route path="/404" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
      </Provider>
  );
}

export default App;