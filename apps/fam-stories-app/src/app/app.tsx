import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RootsPage } from './pages/RootsPage';
import { ProfilePage } from './pages/ProfilePage';
import { AboutAppPage } from './pages/AboutAppPage';
import { UserPage } from './pages/UserPage';
import { ListFamilyMembers } from './components/ListFamilyMembers';
import NotFound from './pages/NotFound';

export const App = () => {
  return (
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
  );
}

export default App;


/* 
    <Route path="*" element={<Navigate to="/404" replace />} />

    :id ska läggas till på /ProfilePage/ 
    samt useParams för att göra nya individuella sidor
*/