import React from "react";
import { Box } from "@mui/material";
import { Navbar, SideNav } from "../../component/common";

const Layout = (props: any) => {
    return (
        <>
            <Box display="flex" flexDirection="column" height="100vh">
                <Box display="flex" flexGrow={1}>
                    <SideNav />
                    <Box flexGrow={1}>
                        <Navbar />
                        <main>
                            {props?.children}
                        </main>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Layout;

