import { AppBar, Box, Container, Link, Toolbar, Typography } from '@mui/material';
import { Outlet, Link as RouterLink } from 'react-router-dom';

const PublicLayout = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
    >
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Nestly
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link component={RouterLink} to="/" color="inherit" underline="none">Home</Link>
            <Link component={RouterLink} to="/about" color="inherit" underline="none">About</Link>
            <Link component={RouterLink} to="/contact" color="inherit" underline="none">Contact</Link>
            <Link component={RouterLink} to="/team" color="inherit" underline="none">Team</Link>
            <Link component={RouterLink} to="/login" color="inherit" underline="none">Login</Link>
          </Box>
        </Toolbar>
      </AppBar>

      {/* This makes the main content take all remaining space */}
      <Box component="main" flexGrow={1}>
        <Outlet />
      </Box>

      {/* Sticky Footer */}
      <Box
        component="footer"
        sx={{
          backgroundColor: (theme) => theme.palette.primary.dark,
          color: 'white',
          py: 2,
          borderTop: '1px solid',
          borderColor: 'divider',
          mt: 'auto'
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" color="white" align="center">
            © {new Date().getFullYear()} Nestly. All rights reserved.
          </Typography>
          <Box sx={{ mt: 1, textAlign: 'center' }}>
            <Link href="/terms" underline="hover" color="white" sx={{ mx: 1 }}>
              Terms
            </Link>
            <Link href="/privacy" underline="hover" color="white" sx={{ mx: 1 }}>
              Privacy
            </Link>
            <Link href="/contact" underline="hover" color="white" sx={{ mx: 1 }}>
              Contact
            </Link>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default PublicLayout;