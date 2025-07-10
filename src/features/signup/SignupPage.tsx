import { Avatar, Box, CardContent, Grid, TextField } from "@mui/material";
import React from "react";
import { Card } from "@mui/material";
import { useState } from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Email, Password, Person, Phone } from "@mui/icons-material";
import LockIcon from '@mui/icons-material/Lock'

const SignupPage = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errors, setErrors] = useState({firstName: '', lastName: '', emailId: '', mobileNumber: '', password: '', confirmPassword: ''})

  const handleSubmit = () => {

  }

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      style={{ minHeight: '100vh', backgroundColor: '#f0f2f5'}}>
        <Card sx={{width: 400, padding: 3}}>
          <CardContent>
            <Grid
              container
              justifyContent='center'
              mb={2}>
                <Avatar sx={{ backgroundColor:'primary.main', width: 56, height: 56}}>
                  <LockOutlinedIcon/>
                </Avatar>
            </Grid>

            <Box component='form' onSubmit={handleSubmit} noValidate>
                  <TextField 
                    required
                    fullWidth
                    margin="normal"
                    label='First Name'
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    error={Boolean(errors.firstName)}
                    helperText={errors.firstName}
                    InputProps={{
                      startAdornment: <Person sx={{mr: 1}}/>
                    }}
                    variant="outlined"
                  />

                  <TextField
                    required
                    fullWidth
                    margin='normal'
                    label='Last Name'
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    error={Boolean(errors.lastName)}
                    helperText={errors.lastName}
                    InputProps={{
                      startAdornment: <Person sx={{mr: 1}}/>
                    }}
                    variant="outlined"
                  />

                  <TextField
                    required
                    fullWidth
                    margin='normal'
                    label='Email Id'
                    type="email"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                    error={Boolean(errors.emailId)}
                    helperText={errors.emailId}
                    InputProps={{
                      startAdornment: <Email sx={{ mr: 1}}/>
                    }}
                    variant="outlined"
                  />

                  <TextField
                    required
                    fullWidth
                    margin='normal'
                    label='Mobile Number'
                    type="mobile"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    error={Boolean(errors.mobileNumber)}
                    helperText={errors.mobileNumber}
                    InputProps={{
                      startAdornment: <Phone sx={{ mr: 1}}/>
                    }}
                    variant="outlined"
                  />

                  <TextField 
                    required
                    fullWidth
                    margin='normal'
                    label='Password'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={Boolean(errors.password)}
                    helperText={errors.password}
                    InputProps={{
                      startAdornment: <LockIcon sx={{ mr:1 }}/>
                    }}
                    variant='outlined'
                  />

                  <TextField 
                    required
                    fullWidth
                    margin='normal'
                    label='Confirm Password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    error={Boolean(errors.confirmPassword)}
                    helperText={errors.confirmPassword}
                    InputProps={{
                      startAdornment: <LockIcon sx={{mr: 1}}/>
                    }}
                    variant='outlined'
                  />
                  
            </Box>
          </CardContent>
        </Card>
    </Grid>
  );
};

export default SignupPage;