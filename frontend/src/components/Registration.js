import React from 'react'
import { useState, useEffect } from 'react'
import {Grid, Paper, Avatar, TextField, Button, Typography, Link} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import './registration.css';
import instance from "../axios";

function Registration() {
    const [emailReg, setEmailReg] = useState(""); 
    const [passwordReg, setPasswordReg] = useState("");
    const [first_name_Reg, setFirstNameReg] = useState("");
    const [last_name_Reg, setLastNameReg] = useState(""); 
    const [registerStatus, setRegisterStatus] = useState(""); 
    const register = () => {
        instance.post("/register", {
            email: emailReg,
            password: passwordReg,
            first_name: first_name_Reg,
            last_name: last_name_Reg,
        }).then((response) => {
            if(response.data.message)
            {
                setRegisterStatus(response.data.message)
            } else {
                setRegisterStatus(response.data[0].email);
            }
        })
    };
        const paperStyle={padding :20, height: '65vh', width: 280, margin:"100px auto"}
        const avatarStyle={backgroundColor: 'orange'}
        const stylButn ={margin:'8px 0'}
        const stylField ={margin:'8px 0'}
    return (
        <div>
            <Grid className='login__container' > 
                <Paper elevation={10} style={paperStyle}>
                   <Grid align = 'center'>
                       <Avatar style={avatarStyle}><LockOutlinedIcon />
                   </Avatar>
                  <h2>Create an Account </h2>
                  </Grid>
                <TextField 
                    label= 'First Name' 
                    placeholder= 'Enter first name...' 
                    onChange= {(e) => {
                        setFirstNameReg(e.target.value); 
                    }}
                    fullWidth required style={stylField}/>
                <TextField 
                    label= 'Last Name' 
                    placeholder= 'Enter last name...' 
                    onChange= {(e) => {
                        setLastNameReg(e.target.value); 
                    }}
                    fullWidth required style={stylField}/>
                <TextField 
                    label= 'Email' 
                    placeholder= 'Enter email...' 
                    onChange= {(e) => {
                        setEmailReg(e.target.value); 
                    }}
                    fullWidth required style={stylField}/>
                <TextField 
                    label= 'Password' 
                    placeholder= 'Enter password...' 
                    onChange= {(e) => {
                        setPasswordReg(e.target.value); 
                    }}
                    type= 'password' 
                    fullWidth required style={stylField}/>
                <Button type='submit' 
                    color= "success" 
                    variant="contained" 
                    onClick= {register}
                    halfWidth style={stylButn}>Sign Up
                </Button>
                <Typography > Already have an account?  
                <Link href="./" underline="hover">
                    {'Sign In'}
                </Link>
                <h1> {registerStatus} </h1> 
                </Typography>
                </Paper> 
            </Grid>
        </div>
    )
}

export default Registration