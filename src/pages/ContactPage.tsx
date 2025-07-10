import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Paper,
} from '@mui/material';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Later: send to backend
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box sx={{ mt: 8, mb: 4 }}>
      <Container maxWidth="md">
        {/* Heading */}
        <Typography variant="h3" align="center" fontWeight="bold" gutterBottom>
          Contact Us
        </Typography>

        {/* Description */}
        <Typography variant="body1" align="center" color="text.secondary" paragraph>
          Have questions, suggestions, or just want to say hello? We'd love to hear from you.
          Reach out to us using the form below and we’ll get back to you as soon as possible.
        </Typography>

        {/* Contact Form */}
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                label="Your Name"
                variant="outlined"
                fullWidth
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                label="Your Email"
                variant="outlined"
                fullWidth
                required
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                label="Your Message"
                variant="outlined"
                fullWidth
                required
                name="message"
                multiline
                rows={5}
                value={formData.message}
                onChange={handleChange}
              />
              <Button type="submit" variant="contained" size="large">
                Send Message
              </Button>
            </Stack>
          </form>
        </Paper>

        {/* Contact Info (optional) */}
        <Box mt={6}>
          <Typography variant="h6" gutterBottom>
            Nestly Headquarters
          </Typography>
          <Typography>123 Productivity Lane, Focus City, India</Typography>
          <Typography>Email: support@nestly.app</Typography>
          <Typography>Phone: +91-98765-43210</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactPage;