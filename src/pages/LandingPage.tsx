import { Box, Typography, Container } from '@mui/material';

const LandingPage = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 10, textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Nestly
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Your all-in-one personal productivity app.
      </Typography>
      <Typography variant="body1" sx={{ mt: 4 }}>
        Boost your focus. Organize your day. Track your progress.
      </Typography>
    </Container>
  );
};

export default LandingPage;