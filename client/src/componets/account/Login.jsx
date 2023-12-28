import { Box, TextField, Button, styled, Typography } from '@mui/material'
import { convertLength } from '@mui/material/styles/cssUtils';
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Component = styled(Box)`
    width:400px;
    margin:auto;
    box-shadow:5px 2px 5px 2px rgb(0 0 0/0.6)
    `
const Image = styled('img')({
    width: 100,
    display: 'flex',
    margin: "auto",
    padding: '50px 0 0'
});

const Wrapper = styled(Box)`
     display:flex;
     padding:25,35
     flex:1;
     flex-direction:column;
     & > div, & > button ,& > p{
        margin-top:20px

     }
    `
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

const Error=styled(Typography)`
font-size:10px;
color:#ff6161;
line-height:0;
margin-top:10px;
font-weight:600;
`



 // for dummy signup object for store a value of signup 
 const signupInitialData={
    name:"",
    username:"",
    password:""  
}
const signinInitialData={
    username:"",
    password:""  
}


const Login = () => {
    const navigate = useNavigate();

    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
    const [account,toggleAccount]=useState('login')
    const [signup,setSignup]=useState(signupInitialData)
    const [login,setLogin]=useState(signinInitialData)

    const [error,setError]=useState('');


    const toggleSinup=()=>{
       account=='login'? toggleAccount('signup') : toggleAccount('login')
    }
     // for signin onchange 

     const inputChange2=(e)=>{

        console.log(e.target.name,e.target.value)
         setLogin({...login,[e.target.name]:e.target.value})
     }  
    // for signup onchange 

    const inputChange=(e)=>{

       console.log(e.target.name,e.target.value)
        setSignup({...signup,[e.target.name]:e.target.value})
    }
     // connect to signin api
     const signinUser=async()=>{
        console.log(login);
        try{
        await axios.post('http://localhost:4000/signin',login).then(res=>{
            if(res.data==='exist')
            {
                alert('welcome to home');
                navigate("/home");
            }
            else if(res.data==='notexist'){
                alert("plz sigup")
            }
        
        })
        .catch(e=>{
            alert("wrong details")
        })
        }catch(e){
            console.log(e);
        }      
    }
 // connect to signup api
    const signupUser=async()=>{
        console.log(signup);
        await axios.post('http://localhost:4000/signup',signup).then(result=>console.log(result))

    }
    return (
        <Component>
            <Box>
                    <Image src={imageURL} alt='login' />
                    { 
                     account==='login' ?
   
                <Wrapper>
                    <TextField variant="standard" label="Enter username " onChange={inputChange2} name='username1' />
                    <TextField variant="standard" label="Enter password " onChange={inputChange2} name='password1' />
                    <LoginButton variant="contained" onClick={signinUser}>Login</LoginButton>
                    <Text style={{textAlign:'center'}}>
                        OR
                    </Text>
                    <SignupButton onClick={toggleSinup}>Create an account</SignupButton>
                </Wrapper>
                 
                :
                <Wrapper>
                    <TextField variant="standard" label="Enter name  " onChange={inputChange} name='name' />
                    <TextField variant="standard" label="Enter username " onChange={inputChange} name='username' />
                    <TextField variant="standard" label="Enter password " onChange={inputChange} name='password' />

                      {error && <Error>{error}</Error>} 

                    <SignupButton onClick={signupUser}>Signup</SignupButton>
                    <Text style={{textAlign:'center'}}>
                        OR
                    </Text>
                    <LoginButton variant="contained" onClick={toggleSinup}>already have an account</LoginButton>
                </Wrapper>
               }

                
            </Box>
        </Component>
    )
}
export default Login;