import React, { useState } from 'react';
import { Container, Button, TextField, Avatar, Card, CardContent   } from '@mui/material';

const Login = () => {

    const [userInput, setUser] = useState('')
    const [passwordInput, setPassword] = useState('')

    const addUser = (event) => {
        setUser(event.target.value);
    }

    const addPassword = (event) => {
        setPassword(event.target.value);
    }

    const onLogin = (event) => {
        event.preventDefault();

        if(userInput.trim().length === 0 && passwordInput.trim().length === 0) {
            console.log('error')
            return;
        }

        setUser('');
        setPassword('');
    }

    return(
        <div>
            <Container>
                <Card>
                    <CardContent>
                        <Avatar />
                    </CardContent>
                </Card>
               
                <form onSubmit={onLogin}>
                    <TextField type="text" value={userInput} label="Username" onChange={addUser}  variant="standard"/>
                    <TextField type="text" value={passwordInput} label="Password" onChange={addPassword}  variant="standard"/>
                    <Button type="submit"  variant="contained">send</Button>
                </form>
            </Container>
        </div>
    );
}

export default Login;