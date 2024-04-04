import React from "react";
import { Box } from "@mui/material";
import WrapperStyles from './WrapperStyle'

const Index = ({ children }: any) => {

    return (
        <Box sx={WrapperStyles}>
            {children}
        </Box>
    )
}

export default Index