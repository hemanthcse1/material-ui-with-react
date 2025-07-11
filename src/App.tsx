
import './App.css';
import { Button, Card, CardContent, TextField } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import ProtectedLayout from './layouts/ProtectedLayout';
import LoginPage from './features/login/LoginPage';
import SignupPage from './features/signup/SignupPage';
import DashboardPage from './features/dashboard/WorkspaceHome';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import ForgotPassword from './features/forgotpassword/ForgotPassword';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './styles/pageTransitions.css';
import { useRef } from 'react';
import RootRedirect from './components/RootRedirect';
import WorkspaceHome from './features/dashboard/WorkspaceHome';


const AnimateRouter = () => {
   const location = useLocation();
   const nodeRef = useRef(null);
  return (
      <TransitionGroup>
      <CSSTransition 
          key={location.pathname} 
          classNames='fade' 
          timeout={0} 
          unmountOnExit 
          nodeRef={nodeRef}>
           <div ref={nodeRef}>
            <Routes>

              {/* Root decision */}
              <Route path="/" element={<RootRedirect />} />

              {/* Public layout */}
              <Route path="/" element={<PublicLayout />}>
                {/* <Route index element={<LandingPage />} /> */}
                <Route path="landing" element={<LandingPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="team" element={<TeamPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="signup" element={<SignupPage />} />
                <Route path="forgotpassword" element={<ForgotPassword />} />
              </Route>

              {/* Protected layout */}
              <Route path="/dashboard" element={<ProtectedLayout />}>
                <Route index element={<WorkspaceHome />} />
              </Route>
            </Routes>
           </div>
        </CSSTransition>
      </TransitionGroup>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AnimateRouter/>
    </BrowserRouter>
  );
}

export default App;
