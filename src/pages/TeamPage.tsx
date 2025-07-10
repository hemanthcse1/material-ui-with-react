import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Avatar,
} from '@mui/material';
import { fetchTeamMembers, TeamMember } from '../api/teamApi';
import { useState, useEffect } from 'react';

const TeamPage = () => {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])

    useEffect(() => {
        const getTeam = async () => {
            try{
                const data = await fetchTeamMembers();
                setTeamMembers(data);
            }catch(error) {
                console.error('Error fetching team members:', error)
            }

        }
        getTeam();
    }, []);
  return (
    <Box sx={{ mt: 8, mb: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" fontWeight="bold" gutterBottom>
          Meet Our Team
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" paragraph>
          We’re a passionate group of builders, engineers, and creators dedicated to making Nestly the most efficient productivity tool for individuals and teams.
        </Typography>

        <Stack
          direction="row"
          spacing={4}
          useFlexGap
          flexWrap="wrap"
          justifyContent="center"
          mt={4}
        >
          {teamMembers.map((member, index) => (
            <Card key={index} sx={{ width: 250 }}>
              <Avatar
                src={member.image}
                alt={`${member.name}'s photo`}
                sx={{
                width: 180,
                height: 180,
                mx: 'auto',
                mt: 2,
                mb: 1,
                }}
                />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {member.name}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {member.role}
                </Typography>
                <Typography variant="body2" mt={1}>
                  {member.bio}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default TeamPage;