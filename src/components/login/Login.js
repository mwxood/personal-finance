import React, { useState } from 'react';
import { Button, TextField, Avatar, Grid, Paper, Box, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import './login.css';

const Login = (props) => {

    const [userInput, setUser] = useState('')
    const [passwordInput, setPassword] = useState('')
    const [inputError, setError] = useState(false)
    const [message, setMessage] = useState('')

    const addUser = (event) => {
        setUser(event.target.value);
    }

    const addPassword = (event) => {
        setPassword(event.target.value);
    }

    const onLogin = (event) => {
        event.preventDefault();

        if(userInput.trim().length === 0 && passwordInput.trim().length === 0) {
            setError(true)
            setMessage( 'All fields are required')
            return;
        }

        setMessage()
        setUser('')
        setPassword('')
        setError(false)
    }

    return(
        <div>
            <Grid>
                <Paper elevation={10} className='paperClass'>
                    <Grid className="loginGrid">
                        <Avatar className="avatar">
                            <LockOutlinedIcon />
                        </Avatar>
                        <h2 className='login-title'>Sign In</h2>
                        <Typography className="errorMessage" component="span">
                            {message}
                        </Typography>
                    </Grid>
                   
                    <form onSubmit={onLogin}>
                    
                       <Box mb={1}>
                         <TextField className={`fullWidth`} error={inputError} type="text" value={userInput} label="Username" onChange={addUser}  variant="standard"/>
                       </Box>
                       <Box mb={3}>
                            <TextField className={`fullWidth`}  error={inputError} type="text" value={passwordInput} label="Password" onChange={addPassword}  variant="standard"/>
                       </Box>
                        <Button className="fullWidth" type="submit"  variant="contained">Login</Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    );
}

export default Login;