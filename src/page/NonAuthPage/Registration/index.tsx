import React, {useContext} from "react";
import { useState } from "react";
import { TextField, Button, FormGroup, FormControl, Box, Link } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useFirebase } from '../../../context/Firebase';


const Index = () => {
    const navigate = useNavigate()
const {registerWithGmail}= useFirebase()

    const [userDetail, setUserDetail] = useState({
        firstName: "",
        lastName: "",
        email: "",
        scope: 1,
        password: ""
    })

    const handleChange = (name: string, value: any) => {
        setUserDetail({ ...userDetail, [name]: value })
    }

    const handleSubmit = async () => {
        // console.log("==>", userDetail);
        try {
            await registerWithGmail(userDetail?.email, userDetail?.password)
            navigate('/login');
        } catch (error: any) {
            const errorCode = error.code;
            const errorMessage = error.message;
            // Handle error
            console.error("Error:", errorCode, errorMessage);
        }
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
        <Box sx={containerStyles} >
            <Box sx={loginContainerStyles}>
                <FormGroup>
                    <FormControl>
                        <Box sx={headerStyles} ><span>Sign Up</span></Box>
                        <TextField
                            id="outlined-basic"
                            value={userDetail?.firstName}
                            onChange={(e: any) => handleChange("firstName", e.target.value)}
                            label="First Name"
                            variant="outlined"
                            type="text"
                            sx={{ marginBottom: '20px' }} />

                        <TextField
                            id="outlined-basic"
                            value={userDetail?.lastName}
                            onChange={(e: any) => handleChange("lastName", e.target.value)}
                            label="Last Name" variant="outlined"
                            type="text"
                            sx={{ marginBottom: '20px' }} />

                        <TextField
                            id="outlined-basic"
                            value={userDetail?.email}
                            onChange={(e: any) => handleChange("email", e.target.value)}
                            label="Email" variant="outlined"
                            type="email"
                            sx={{ marginBottom: '20px' }} />

                        <TextField
                            id="outlined-basic"
                            value={userDetail?.password}
                            onChange={(e: any) => handleChange("password", e.target.value)}
                            label="Password" variant="outlined"
                            type="password"
                            sx={{ marginBottom: '20px' }} />
                        <Button variant="contained" onClick={handleSubmit}>Submit</Button>

                        <Box sx={{ textAlign: 'center', fontSize: 15, m: 2 }}>Or<Link sx={{ mx: 1 }}
                            href="/login">
                            Login
                        </Link></Box>
                    </FormControl>
                </FormGroup>
            </Box>
        </Box>
    )

}

export default Index