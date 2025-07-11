import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RootRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    console.log('stored user token in root ', token)
    if (token) {
      navigate('/dashboard', { replace: true });
    } else {
      navigate('/landing', { replace: true }); // or '/' if LandingPage is at home
    }
  }, [navigate]);

  return null;
};

export default RootRedirect;