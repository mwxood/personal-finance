import React, { useState } from 'react';
import { Button, TextField, Avatar, Grid, Paper, Box, Typography } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


const Register = (props) => {

    const [userInput, setUser] = useState('')
    const [emailInput, setEmail] = useState('')
    const [passwordInput, setPassword] = useState('')
    const [passwordInputConfirm, setPasswordInputConfirm] = useState('')
    const [inputError, setError] = useState(false)
    const [message, setMessage] = useState('')

    const addUser = (event) => {
        setUser(event.target.value);
    }

    const addPassword = (event) => {
        setPassword(event.target.value);
    }

    const addPasswordConfirm = (event) => {
        setPasswordInputConfirm(event.target.value)
    }

    const addEmail = (event) => {
        setEmail(event.target.value);
    }


    const onLogin = (event) => {
        event.preventDefault();

        if(userInput.trim().length === 0 && passwordInput.trim().length === 0 && emailInput.trim().length === 0 && passwordInputConfirm.trim().length === 0)    {
            setError(true)
            setMessage( 'All fields are required')
            return;
        }

        setMessage()
        setUser('')
        setEmail('')
        setPassword('')
        setPasswordInputConfirm('')
        setError(false)
    }

    return(
        <div>
            <Grid>
                <Paper elevation={10} className='paperClass'>
                    <Grid className="loginGrid">
                        <Avatar className="avatar">
                            <PersonOutlineIcon />
                        </Avatar>
                        <h2 className='login-title'>Registration</h2>
                        <Typography className="errorMessage" component="span">
                            {message}
                        </Typography>
                    </Grid>
                   
                    <form onSubmit={onLogin}>
                    
                       <Box mb={1}>
                         <TextField className={`fullWidth`} error={inputError} type="text" value={userInput} label="Username" onChange={addUser}  variant="standard"/>
                       </Box>

                       <Box mb={1}>
                         <TextField className={`fullWidth`} error={inputError} type="text" value={emailInput} label="Email" onChange={addEmail}  variant="standard"/>
                       </Box>

                       <Box mb={3}>
                            <TextField className={`fullWidth`}  error={inputError} type="text" value={passwordInput} label="Password" onChange={addPassword}  variant="standard"/>
                       </Box>

                       <Box mb={3}>
                            <TextField className={`fullWidth`}  error={inputError} type="text" value={passwordInputConfirm} label="Confirm Password" onChange={addPasswordConfirm}  variant="standard"/>
                       </Box>


                        <Button className="fullWidth" type="submit"  variant="contained">Registration</Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    );
}

export default Register;