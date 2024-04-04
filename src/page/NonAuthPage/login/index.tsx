import React from "react";
import { useState } from "react";
import { useFirebase } from '../../../context/Firebase';
import { useNavigate } from "react-router-dom";
// import { app } from "../../../api/services/Firebase"
import { TextField, Button, FormGroup, FormControl, Box, Link } from '@mui/material';

const Index = () => {
    const navigate = useNavigate()
    const {signInWithGmail}= useFirebase()

    const [userDetail, setUserDetail] = useState({
        email: "",
        password: ""
    })

    const handleChange = (name: string, value: any) => {
        setUserDetail({ ...userDetail, [name]: value })
    }

    const handleSubmit = () => {
        signInWithGmail(userDetail?.email, userDetail?.password)
            .then((userCredential:any) => {
                navigate('/dashboard')
            })
            .catch((error: any) => {
                const errorMessage = error.message;
                console.log("==>", errorMessage);
            });
    }


    const containerStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        position: 'relative',
    }

    const loginContainerStyles = {
        padding: '20px',
        boxShadow: 3,
        position: 'relative',
    }

    const headerStyles = {
        textTransform: 'capitalize',
        fontWeight: 'bold',
        color: '#2196f3',
        textAlign: 'center',
        fontSize: 25,
        my: '1rem'
    }
    return (
        <>
            <Box sx={containerStyles} >
                <Box sx={loginContainerStyles}>
                    <FormGroup>
                        <FormControl>
                            <Box sx={headerStyles} ><span>Login</span></Box>
                            <TextField id="outlined-basic" value={userDetail?.email} onChange={(e: any) => handleChange("email", e.target.value)} label="Email" variant="outlined" type="email" sx={{ marginBottom: '20px' }} />
                            <TextField id="outlined-basic" value={userDetail?.password} onChange={(e: any) => handleChange("password", e.target.value)} label="Password" variant="outlined" type="password" sx={{ marginBottom: '20px' }} />
                            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                            <Box sx={{ textAlign: 'center', fontSize: 16, m: 2 }}>Or</Box>
                            <Box sx={{ textAlign: 'center', fontSize: 12, }}>Don't have an account? <Link
                                href="/registration">
                                Sign Up
                            </Link></Box>
                        </FormControl>
                    </FormGroup>
                </Box>
            </Box>
        </>
    )
}

export default Index
