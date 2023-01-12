import './index.css';
import { Provider } from 'react-redux';
import { store, useAppSelector } from './store/store';
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
        <Router />
      </Provider>
  );
}


const Router = () => {
  const accessToken = useAppSelector((store) => store.user.accessToken);
  const isLoggedIn = !!accessToken;

  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<LogInPage />} />
      {isLoggedIn && <Route path="/main" element={<RootsPage />} />}
      {isLoggedIn && <Route path="/profilePage/:familyMemberId" element={<ProfilePage />} /> }
      {isLoggedIn && <Route path="/editprofile/:familyMemberId" element={<EditProfilePage />} /> }
      {isLoggedIn && <Route path="/about" element={<AboutAppPage />} />}
      {isLoggedIn && <Route path="/user" element={<UserPage />} />}
      {isLoggedIn && <Route path="/listfamilymembers" element={<ListFamilyMembers />} />}
      <Route path="/404" element={<NotFound />} />
    </Routes>
</BrowserRouter>)
}

export default App;