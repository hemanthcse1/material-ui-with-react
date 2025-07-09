import { Avatar, Box, Card, Checkbox, Link, CardContent, FormControlLabel, Grid, TextField, Typography, Button, Snackbar, Alert } from "@mui/material";
import React, { useState } from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonIcon from '@mui/icons-material/Person'
import LockIcon from '@mui/icons-material/Lock'
import { loginUser } from "../../api/userApi";


const LoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState({username: '', password: ''})

    const [snackbar, setSnackBar] = useState({
        open: false,
        message: '',
        severity: 'success' as 'success' | 'error',
    });

    const handleCloseSnackBar = () => {
        setSnackBar(prev => ({...prev, open: false}));
    }

    const validate = () => {
        let isValid = true;
        const newErrors = {username: '', password: ''};

        if(!username.trim()) {
            newErrors.username = 'Username is required';
            isValid = false; 
        }

        if(!password.trim()){
            newErrors.password = 'Password is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if(!validate()){
            setSnackBar({
                open: true,
                message: "Login failed. Please fill in all fields.",
                severity: 'error'
            });
            return;
        }

        try {
            const response = await loginUser({ emailId: username, password});
             if (response.success) {
                    setSnackBar({
                        open: true,
                        message: response.message || 'Login successful!',
                        severity: 'success'
                    });

                    console.log('name:', response.data.firstName)
                    console.log('name:', response.data.lastName)
                    console.log('name:', response.data.emailId)

                // Optional: store token or user data
                // localStorage.setItem('user', JSON.stringify(response.data));
            } else {
                setSnackBar({
                open: true,
                message: response.message || 'Invalid credentials!',
                severity: 'error'
                });
            }

        }catch (error: any){
            setSnackBar({
                open: true,
                message: error.response?.data?.message || 'Login failed!',
                severity: 'error'
            });
        }
    }

    return(
        <Grid
            container
            justifyContent='center'
            alignItems='center'
            style={{minHeight: '100vh', backgroundColor: '#f0f2f5'}}>
            <Card sx={{width: 400, padding: 3}}>
                <CardContent>
                    <Grid container justifyContent='center' mb={2}>
                        <Avatar sx={{ bgcolor:'primary.main', width: 56, height: 56}}>
                            <LockOutlinedIcon />
                        </Avatar>
                    </Grid>
                    <Box component='form' onSubmit={handleSubmit} noValidate>
                        <TextField 
                        required
                        fullWidth
                        margin='normal'
                        label='Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        error={Boolean(errors.username)}
                        helperText={errors.username}
                        InputProps={{
                            startAdornment: <PersonIcon sx={{ mr: 1 }} />,
                        }}
                        variant="outlined"/>

                        <TextField 
                        required
                        fullWidth
                        margin="normal"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={Boolean(errors.password)}
                        helperText={errors.password}
                        InputProps={{
                            startAdornment: <LockIcon sx={{ mr: 1 }} />,
                        }}
                        variant="outlined"/>

                        <FormControlLabel
                            control={<Checkbox checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}/>}
                            label="Remember Me"
                            sx={{ mt: 1 }}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ mt: 2, mb: 1 }}
                        >
                            Login
                        </Button>

                        <Grid container justifyContent='space-between'>
                            <Link href="#" variant="body2">
                                Forgot Password?
                            </Link>
                            <Link href="#" variant="body2">
                                Sign Up?
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
    )
};

export default LoginPage;