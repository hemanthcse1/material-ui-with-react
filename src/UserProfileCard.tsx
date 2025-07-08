import { Card, CardContent } from "@mui/material";
import React from "react";


const UserProfileCard = () => {
    const user = {
        name: 'Hemanth Kumar N V',
        email: 'hemanthcse1@gmail.com',
        dob: '30-01-1995',
        place:  'Bangalore, Karnataka',
        designation: 'Senior Lead Software Engineer',
        department: 'Investment Banking',
        joinedOn: '03-07-2024',
        role: 'Responsible for building backend microservices for compliance monitoring. Handles system design, performance optimization, and secure integration with internal APIs.',
        skills: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'AWS', 'Docker'],
    };
    return (
        <Card sx={{maxWidth: 600, margin:'auto', mt:4, p: 2, boxShadow: 3}}>
            <CardContent>

            </CardContent>
        </Card>
    );
};


export default UserProfileCard;