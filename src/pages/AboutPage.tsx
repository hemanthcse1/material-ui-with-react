import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
} from '@mui/material';

const AboutPage = () => {
  return (
    <Box sx={{ mt: 8, mb: 4 }}>
      <Container maxWidth="md">
        {/* Hero Section */}
        <Typography variant="h3" gutterBottom fontWeight="bold" align="center">
          About Nestly
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
          Your Personal Productivity Partner
        </Typography>

        {/* Introduction */}
        <Typography variant="body1" paragraph>
          Nestly is an all-in-one personal productivity and life management app designed for modern individuals who want to stay organized, focused, and in control of their time and goals.
          Whether you're a student, working professional, or entrepreneur, Nestly helps you manage your tasks, track progress, journal your thoughts, and streamline your day — all in one unified space.
        </Typography>

        {/* Mission & Vision */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={4}
          sx={{ my: 4 }}
        >
          <Card variant="outlined" sx={{ flex: 1 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body2">
                To empower individuals to lead productive, purposeful lives by providing intuitive tools that blend personal growth and task management into a single platform.
              </Typography>
            </CardContent>
          </Card>

          <Card variant="outlined" sx={{ flex: 1 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Our Vision
              </Typography>
              <Typography variant="body2">
                To become the world's most trusted digital companion for personal organization and mindful living — bringing clarity and structure to everyday chaos.
              </Typography>
            </CardContent>
          </Card>
        </Stack>

        {/* Features */}
        <Typography variant="h5" gutterBottom>
          What Makes Nestly Unique?
        </Typography>
        <ul style={{ lineHeight: 2 }}>
          <li>🗓 Smart To-Do Lists with Status Tracking (Ready, In Progress, Paused, Completed)</li>
          <li>📒 Personal Journaling to reflect and track emotional well-being</li>
          <li>📂 Attachment support for organizing tasks and goals visually</li>
          <li>📊 Activity logs to track every change you make</li>
          <li>🧘 Mood and Focus tracking for self-awareness</li>
        </ul>

        {/* CTA */}
        <Typography variant="h6" sx={{ mt: 4 }} align="center">
          Start organizing your life the Nestly way.
        </Typography>
        <Typography variant="body2" align="center" color="text.secondary">
          Join thousands of users already managing their daily lives with confidence.
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutPage;