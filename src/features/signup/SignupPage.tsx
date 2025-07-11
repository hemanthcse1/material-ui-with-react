import { Avatar, Box, Button, Link, CardContent, Grid, TextField } from "@mui/material";
import React from "react";
import { Card, Snackbar, Alert } from "@mui/material";
import { useState } from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Email, Password, Person, Phone } from "@mui/icons-material";
import LockIcon from '@mui/icons-material/Lock'
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { signupUser } from "../../api/userApi";

const SignupPage = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [errors, setErrors] = useState({firstName: '', lastName: '', emailId: '', mobileNumber: '', password: '', confirmPassword: ''})

    const [snackbar, setSnackBar] = useState({
      open: false,
      severity: 'success' as 'success' | 'error',
      message: ' ' 
    });

     const handleCloseSnackBar = () => {
        setSnackBar(prev => ({...prev, open: false}));
    }

    const validate = () => {
      let isValid = true;
      const newErrors = {
        firstName: '', 
        lastName: '', 
        emailId: '', 
        mobileNumber: '',
        password: '',
        confirmPassword: ''
      }

      if(!firstName.trim()){
        newErrors.firstName = 'First Name required';
        isValid = false;
      }

      if(!lastName.trim()){
        newErrors.lastName = 'Last Name required';
        isValid = false;
      }

      if(!emailId.trim()){
        newErrors.emailId = 'Email Id required';
        isValid = false;
      }

      if(!mobileNumber.trim()){
        newErrors.mobileNumber = 'Mobile Number required';
        isValid = false;
      }

      if(!password.trim()){
        newErrors.password = 'Password required';
        isValid = false;
      }

      if(!confirmPassword.trim()){
        newErrors.confirmPassword = 'Confirm password required';
        isValid = false;
      }

      if(password != confirmPassword){
        newErrors.confirmPassword = 'Password and confirm password didn\'t match';
        isValid = false;
      }

      setErrors(newErrors);
      return isValid;
    };

    const handleSubmit = async (e: React.FocusEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!validate()){
          setSnackBar({
            open: true,
            message: 'Signup failed, please fill in all the fields',
            severity: 'error'
          });
          return;
        }

        try{
          const response = await signupUser({firstName, lastName, emailId, mobileNumber, password});
          if(response.success){
            setSnackBar({
              open: true,
              message: response.message || 'Registration successful!',
              severity: 'success'
            })

             // ✅ Clear all form fields
            setFirstName('');
            setLastName('');
            setEmailId('');
            setMobileNumber('');
            setPassword('');
            setConfirmPassword('');

            // ✅ Also clear previous validation errors if needed
            setErrors({
              firstName: '',
              lastName: '',
              emailId: '',
              mobileNumber: '',
              password: '',
              confirmPassword: ''
            });

            console.log("First Name: ", response.data.firstName)
            console.log("Last Name ", response.data.lastName)
          }else {
            setSnackBar({
              open: true,
              message: response.message || 'Registration failed',
              severity: 'error'
            })
          }
        }catch(error: any){
          setSnackBar({
            open: true,
            message: error.response?.data?.message || 'Registration failed with error ',
            severity: 'error'
          })
        }
    };

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
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    error={Boolean(errors.confirmPassword)}
                    helperText={errors.confirmPassword}
                    InputProps={{
                      startAdornment: <LockIcon sx={{mr: 1}}/>
                    }}
                    variant='outlined'
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{mt: 2, mb: 1}}
                    >
                    Signup
                  </Button>

                  <Grid
                    container justifyContent='space-between'>
                      <Link component={RouterLink} to={'/forgotpassword'} variant="body2">
                        Forgot Password?
                      </Link>

                      <Link component={RouterLink} to={'/login'} variant="body2">
                        Login
                      </Link>
                  </Grid>
                  
            </Box>
          </CardContent>
        </Card>
        
        <Snackbar
            open={snackbar.open}
            autoHideDuration={3000}
            onClose={handleCloseSnackBar}
            anchorOrigin={{ vertical: 'top', horizontal: 'center'}}>
            <Alert onClose={handleCloseSnackBar} severity={snackbar.severity} sx={{ width: '100%'}}>
                  {snackbar.message}
            </Alert>
        </Snackbar>
    </Grid>
  );
};

export default SignupPage;