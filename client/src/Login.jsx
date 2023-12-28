import { Box, TextField, Button, Typography } from '@mui/material';
import styled from '@mui/system/styled';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Wrapper = styled(Box)`
    display: flex;
    padding: 25px 35px;
    flex: 1;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 /20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`;

const signupInitialData = {
    name: "",
    username: "",
    password: ""
};

const signinInitialData = {
    username: "",
    password: ""
};

const Login = () => {
    const navigate = useNavigate();
    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialData);
    const [login, setLogin] = useState(signinInitialData);
    const [error, setError] = useState('');

    const toggleSinup = () => {
        toggleAccount(account === 'login' ? 'signup' : 'login');
    };

    const inputChange2 = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    const inputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    };

    const signinUser = async () => {
        try {
            const res = await axios.post('http://localhost:4000/signin', login);
            if (res.data === 'exist') {
                alert('Welcome to home');
                navigate("/home");
            } else if (res.data === 'notexist') {
                alert("Please sign up");
            }
        } catch (e) {
            alert("Wrong details");
        }
    };

    const signupUser = async () => {
        try {
            await axios.post('http://localhost:4000/signup', signup);
            // Handle successful signup, e.g., show a success message
        } catch (error) {
            // Handle signup error, e.g., display an error message
            console.error('Signup failed:', error);
        }
    };

    return (
        <Component>
            <Wrapper>
                {account === 'login' ?
                    <>
                        <TextField variant="standard" label="Enter username" onChange={inputChange2} name='username1' />
                        <TextField variant="standard" label="Enter password" onChange={inputChange2} name='password1' />
                        <LoginButton variant="contained" onClick={signinUser}>Login</LoginButton>
                        <Text style={{ textAlign: 'center' }}>OR</Text>
                        <SignupButton onClick={toggleSinup}>Create an account</SignupButton>
                    </>
                    :
                    <>
                        <TextField variant="standard" label="Enter name" onChange={inputChange} name='name' />
                        <TextField variant="standard" label="Enter username" onChange={inputChange} name='username' />
                        <TextField variant="standard" label="Enter password" onChange={inputChange} name='password' />
                        {error && <Error>{error}</Error>}
                        <SignupButton onClick={signupUser}>Signup</SignupButton>
                        <Text style={{ textAlign: 'center' }}>OR</Text>
                        <LoginButton variant="contained" onClick={toggleSinup}>Already have an account</LoginButton>
                    </>
                }
            </Wrapper>
        </Component>
    );
};

export default Login;
